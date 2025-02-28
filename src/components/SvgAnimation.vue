<template>
    <svg ref="svg" width="400" height="400" viewBox="0 0 400 400" style="border:1px solid #000;"></svg>
  </template>
  
  <script setup>
  import { onMounted, ref } from 'vue';
  const svg = ref(null);
  
  function polygonCentroid(points) {
    let area = 0, cx = 0, cy = 0;
    const n = points.length;
    for (let i = 0; i < n; i++) {
      const p0 = points[i];
      const p1 = points[(i + 1) % n];
      const cross = p0.x * p1.y - p1.x * p0.y;
      area += cross;
      cx += (p0.x + p1.x) * cross;
      cy += (p0.y + p1.y) * cross;
    }
    area = area / 2;
    cx = cx / (6 * area);
    cy = cy / (6 * area);
    return { x: cx, y: cy };
  }
  
  function getRandomPointOnSquareSide(size) {
    const side = Math.floor(Math.random() * 4);
    let x = 0, y = 0;
    switch (side) {
      case 0: x = Math.random() * size; y = 0; break;
      case 1: x = size; y = Math.random() * size; break;
      case 2: x = Math.random() * size; y = size; break;
      case 3: x = 0; y = Math.random() * size; break;
    }
    return { x, y };
  }
  
  function splitPolygon(polygon, lineStart, lineEnd) {
    const left = [];
    const right = [];
    const pts = polygon.points;
    const n = pts.length;
    for (let i = 0; i < n; i++) {
      const curr = pts[i];
      const prev = pts[(i + n - 1) % n];
      const d1 = (lineEnd.x - lineStart.x) * (prev.y - lineStart.y) - (lineEnd.y - lineStart.y) * (prev.x - lineStart.x);
      const d2 = (lineEnd.x - lineStart.x) * (curr.y - lineStart.y) - (lineEnd.y - lineStart.y) * (curr.x - lineStart.x);
      if (d1 >= 0) left.push(prev);
      if (d1 * d2 < 0) {
        const t = d1 / (d1 - d2);
        const interX = prev.x + t * (curr.x - prev.x);
        const interY = prev.y + t * (curr.y - prev.y);
        const intersection = { x: interX, y: interY };
        left.push(intersection);
        right.push(intersection);
      }
      if (d2 <= 0) right.push(curr);
    }
    const result = [];
    if (left.length >= 3) {
      result.push({
        points: left,
        originalPoints: left.map(p => ({ ...p })),
        color: "hsl(" + Math.random() * 360 + ",70%,60%)",
        center: polygonCentroid(left),
        direction: { x: 0, y: 0 }
      });
    }
    if (right.length >= 3) {
      result.push({
        points: right,
        originalPoints: right.map(p => ({ ...p })),
        color: "hsl(" + Math.random() * 360 + ",70%,60%)",
        center: polygonCentroid(right),
        direction: { x: 0, y: 0 }
      });
    }
    return result;
  }
  
  function divideSquare(size, numCuts) {
    const initialPolygon = {
      points: [
        { x: 0, y: 0 },
        { x: size, y: 0 },
        { x: size, y: size },
        { x: 0, y: size }
      ],
      originalPoints: [
        { x: 0, y: 0 },
        { x: size, y: 0 },
        { x: size, y: size },
        { x: 0, y: size }
      ],
      color: "hsl(" + Math.random() * 360 + ",70%,60%)",
      center: { x: size / 2, y: size / 2 },
      direction: { x: 0, y: 0 }
    };
  
    let polygons = [initialPolygon];
    for (let i = 0; i < numCuts; i++) {
      const newPolygons = [];
      const p1 = getRandomPointOnSquareSide(size);
      const p2 = getRandomPointOnSquareSide(size);
      polygons.forEach(poly => {
        const splitPolys = splitPolygon(poly, p1, p2);
        if (splitPolys.length > 0) {
          newPolygons.push(...splitPolys);
        } else {
          newPolygons.push(poly);
        }
      });
      polygons = newPolygons;
    }
    const squareCenter = { x: size / 2, y: size / 2 };
    polygons.forEach(poly => {
      poly.center = polygonCentroid(poly.originalPoints);
      const dx = poly.center.x - squareCenter.x;
      const dy = poly.center.y - squareCenter.y;
      const mag = Math.hypot(dx, dy) || 1;
      poly.direction = { x: dx / mag, y: dy / mag };
    });
    return polygons;
  }
  
  function createSvgPolygonElement(poly) {
    const pointsStr = poly.originalPoints.map(p => p.x + "," + p.y).join(" ");
    const polygonEl = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
    polygonEl.setAttribute("points", pointsStr);
    polygonEl.setAttribute("fill", poly.color);
    polygonEl.setAttribute("stroke", "#000");
    return polygonEl;
  }
  
  function animateTranslationSvg(svg, polygons, maxOffset) {
    const period = 4000;
    const startTime = performance.now();
    function animate(currentTime) {
      const elapsed = currentTime - startTime;
      const t = (1 - Math.cos((2 * Math.PI * elapsed) / period)) / 2;
      const offsetFactor = maxOffset * t;
      polygons.forEach(poly => {
        const offsetX = poly.direction.x * offsetFactor;
        const offsetY = poly.direction.y * offsetFactor;
        if (poly.elem) {
          poly.elem.setAttribute("transform", "translate(" + offsetX + " " + offsetY + ")");
        }
      });
      requestAnimationFrame(animate);
    }
    requestAnimationFrame(animate);
  }
  
  /* ----- Запуск анимации SVG ----- */
  onMounted(() => {
    const svgEl = svg.value;
    const size = parseFloat(svgEl.getAttribute("width"));
    const numCuts = 20;
    const polygons = divideSquare(size, numCuts);
    polygons.forEach(poly => {
      const polyElem = createSvgPolygonElement(poly);
      poly.elem = polyElem;
      svgEl.appendChild(polyElem);
    });
    const maxOffset = 15;
    animateTranslationSvg(svgEl, polygons, maxOffset);
  });
  </script>
  
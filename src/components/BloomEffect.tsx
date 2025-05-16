
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

// Create a separate CSS file for styling
<lov-write file_path="src/styles/bloom.css">
.bloom-canvas {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
  opacity: 0.6;
  mix-blend-mode: screen;
}

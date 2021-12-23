import Rect from './rect';
import { LineBorder, Direction } from './types';

function createLine(
  width: number,
  height: number,
  top: number,
  left: number,
  text: string,
  border: LineBorder = 'none',
): void {
  const marker: HTMLSpanElement = document.createElement('span');
  marker.style.backgroundColor = 'red';
  marker.style.position = 'fixed';
  marker.classList.add('spacing-marker');
  marker.style.width = `${width}px`;
  marker.style.height = `${height}px`;

  if (border === 'x') {
    marker.style.borderLeft = '1px solid rgba(255, 255, 255, 0.8)';
    marker.style.borderRight = '1px solid rgba(255, 255, 255, 0.8)';
  }
  
  if (border === 'y') {
    marker.style.borderTop = '1px solid rgba(255, 255, 255, 0.8)';
    marker.style.borderBottom = '1px solid rgba(255, 255, 255, 0.8)';
  }
  
  marker.style.pointerEvents = 'none';
  marker.style.top = `${top}px`;
  marker.style.left = `${left}px`;
  marker.style.zIndex = '9998';
  marker.style.boxSizing = 'content-box';

  const value: HTMLSpanElement = document.createElement('span');
  value.classList.add('spacing-value');
  value.style.backgroundColor = 'red';
  value.style.color = 'white';
  value.style.fontSize = '10px';
  value.style.display = 'inline-block';
  value.style.fontFamily = 'Helvetica, sans-serif';
  value.style.fontWeight = 'bold';
  value.style.borderRadius = '20px';
  value.style.position = 'fixed';
  value.style.width = '42px';
  value.style.height = '16px';
  value.style.lineHeight = '15px';
  value.style.textAlign = 'center';
  value.style.zIndex = '10000';
  value.style.pointerEvents = 'none';
  value.innerText = text;
  value.style.boxSizing = 'content-box';

  if (border === 'x') {
    let topOffset = top + height / 2 - 7;

    if (topOffset > document.documentElement.clientHeight -20) {
      topOffset = document.documentElement.clientHeight -20;
    }

    if (topOffset < 0) {
      topOffset = 6;
    }

    value.style.top = `${topOffset}px`;
    value.style.left = `${left + 6}px`;
  } else if (border === 'y') {
    let leftOffset = left + width / 2 - 20;

    if (leftOffset > document.documentElement.clientWidth - 48) {
      leftOffset = document.documentElement.clientWidth - 48;
    }

    if (leftOffset < 0) {
      leftOffset = 6;
    }

    value.style.top = `${top + 6}px`;
    value.style.left = `${leftOffset}px`;
  }
  document.body.appendChild(marker);
  document.body.appendChild(value);
}
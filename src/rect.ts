export default class Rect {
  top: number;
  left: number;
  width: number;
  height: number;
  right: number;
  bottom: number;

  constructor(rect: DOMRect) {
    this.top = rect.top;
    this.left = rect.left;
    this.width = rect.width;
    this.height = rect.height;
    this.right = rect.right;
    this.bottom = rect.bottom;
  }
  colliding(rect: Rect): boolean {
    return (
      this.left < rect.right &&
      this.right > rect.left &&
      this.top < rect.bottom &&
      this.bottom > rect.top
    );
  }
  containing(rect: Rect): boolean {
    return (
      this.left <= rect.left &&
      this.right >= rect.right &&
      this.top <= rect.top &&
      this.bottom >= rect.bottom
    );
  }
  inside(rect: Rect): boolean {
    return (
      this.left >= rect.left &&
      this.right <= rect.right &&
      this.top >= rect.top &&
      this.bottom <= rect.bottom
    );
  }
}
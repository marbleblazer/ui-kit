const WIDTH = 101;
const HEIGHT = 1;

export class LinearGradientHelper {
  context: CanvasRenderingContext2D | null = null;

  constructor(private gradientColors: [string, number][]) {
    const canvasElement = document.createElement('CANVAS') as HTMLCanvasElement;
    canvasElement.width = WIDTH;
    canvasElement.height = HEIGHT;

    this.context = canvasElement.getContext('2d');

    if (this.context === null) return;

    const gradient = this.context.createLinearGradient(0, 0, WIDTH, 0);

    gradientColors.forEach(([color, percent]) => {
      gradient.addColorStop(percent, color);
    });

    this.context.fillStyle = gradient;
    this.context.fillRect(0, 0, WIDTH, HEIGHT);
  }

  getColor(percent: number): string | null {
    try {
      const color = this.context!.getImageData(percent, 0, 1, 1);
      const rgba = color.data;

      return `rgb(${rgba[0]}, ${rgba[1]}, ${rgba[2]})`;
    } catch {
      return null;
    }
  }

  getGradientColors(): string {
    return `${this.gradientColors.map(([color, percent]) => `${color} ${percent * 100}%`).join(', ')})`;
  }
}

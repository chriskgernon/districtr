import { html } from "lit-html";

const colorPickerTemplate = (colors, onInput, activeColor) => html`
<fieldset class="brush-colors">
<legend>Brush Color</legend>
${colors.map(
    color => html`
    <div class="color-picker">
    <input type="radio" id="brush-color__${
        color.id
    }" name="brush-color" value="${color.id}"
    ?checked=${color.id === activeColor}
    @input=${onInput}>
    <div class="color-picker__radio" style="background: ${color.name}"></div>
    </div>`
)}
</fieldset>`;

export default class BrushColorPicker {
    constructor(brush, colors, render) {
        this.brush = brush;
        this.colors = colors;
        this.render = render;

        this.selectColor = this.selectColor.bind(this);
    }
    selectColor(e) {
        this.brush.setColor(e.target.value);
    }
    view() {
        return colorPickerTemplate(
            this.colors,
            this.selectColor,
            this.colors[this.brush.color].id
        );
    }
}

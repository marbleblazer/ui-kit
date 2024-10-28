export const lineChartTooltip = (title: unknown, subTitle: unknown) => {
    return `
    <div style="text-align: left;">
       <span>${title}</span>
       </br>
       <span>${subTitle}</span>
    </div>
`;
};

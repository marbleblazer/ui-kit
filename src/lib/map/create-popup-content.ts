export function createPopupContent(popupData: Record<string, string>) {
    if (!popupData) {
        return 'No additional data available.';
    }

    const dataItems = [
        { label: 'Last update:', value: popupData.lastUpdate },
        { label: 'Address:', value: popupData.address },
        { label: 'Motion state:', value: popupData.motion },
        { label: 'Unit name:', value: popupData.unitName },
        { label: 'Unique identifier:', value: popupData.uniqueId },
        { label: 'Model:', value: popupData.model },
        { label: 'Speed:', value: popupData.speed },
        { label: 'Driver:', value: popupData.driver },
    ];

    let content = '<div style="width: 100%; height: 100%; display: flex; flex-direction: column; gap: 10px">';

    dataItems.forEach((item) => {
        content += `<div style="width: 100%; display: flex; flex-direction: row">
                        <label>${item.label}</label>
                        &nbsp;&nbsp;&nbsp;
                        <p>${item.value}</p>
                    </div>`;
    });

    content += '</div>';

    return content;
}

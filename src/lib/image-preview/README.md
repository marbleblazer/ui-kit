# ImagePreview Component

## Overview

`ImagePreview` is a React component for handling image uploads, previews, and management. It provides a drag-and-drop interface with file validation, image preview, and removal functionality.

## Features

- **Image Upload** - File input with click-to-upload functionality
- **Drag and Drop** - Support for dragging images directly onto the component
- **Image Preview** - Display of uploaded images with proper sizing
- **File Validation** - Support for PNG and JPEG formats only
- **Removal Control** - Delete button to remove uploaded images
- **Customizable Text** - Configurable title and subtitle for empty state
- **Theme Integration** - Material-UI theme-aware styling
- **Responsive Design** - Adaptable to different container sizes

## Usage

```tsx
import { ImagePreview } from '@chirpwireless/ui-kit';

<ImagePreview
  previewUrl={imageUrl}
  onLoad={(file) => console.log('Image loaded:', file)}
  onRemove={() => console.log('Image removed')}
  title="Upload Image"
  subTitle="PNG or JPG up to 10MB"
  width="200px"
  height="180px"
/>;
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `previewUrl` | `string` | `undefined` | URL of the image to display |
| `inputRef` | `Ref<HTMLInputElement>` | `undefined` | Ref to the file input element |
| `onRemove` | `() => void` | `undefined` | Callback when image is removed |
| `onLoad` | `(file: File) => void` | `undefined` | Callback when image is loaded |
| `title` | `string` | `'title'` | Title text for empty state |
| `subTitle` | `string` | `'subtitle'` | Subtitle text for empty state |
| `width` | `string` | `'160px'` | Width of the preview container |
| `height` | `string` | `'150px'` | Height of the preview container |
| `borderRadius` | `number \| string` | `2` | Border radius of the container |

## File Validation

The component only accepts the following image formats:
- `image/png`
- `image/jpeg`

Files of other types will be rejected silently.

## Event Handling

### onLoad Event
Called when a valid image file is selected or dropped. Provides the File object:
```typescript
onLoad: (file: File) => void
```

### onRemove Event  
Called when the delete button is clicked:
```typescript
onRemove: () => void
```

## Styling

### Container Styles
- Background: `theme.palette.background.background9`
- Position: relative
- Overflow: hidden
- Customizable width, height, and border radius

### Image Styles
- Width: 100% of container
- Height: 100% of container  
- Object-fit: cover
- Z-index: 2

### Delete Button Styles
- Position: absolute bottom-right
- Size: 32x32px
- Color: `theme.palette.base.color6`
- Background: theme-aware color (#4F2B20 dark, #F0D3CA light)
- Hover effects with transparency

### Empty State Styles
- Centered content
- Icon color: `theme.palette.text.text8`
- Title color: `theme.palette.text.text1`
- Subtitle color: `theme.palette.text.text8`

## Drag and Drop

The component supports drag and drop functionality:
- Prevents default browser behavior on drag events
- Validates dropped file types
- Reads dropped files using FileReader
- Provides the same onLoad callback as file input

## Accessibility

- Hidden file input with proper labeling
- Keyboard accessible delete button
- Screen reader compatible
- Focus management
- ARIA labels for interactive elements

## Dependencies

- `@mui/material` - Core Material-UI components and styling
- `../button` - Button component for delete functionality
- `../typography` - Typography components for text
- `@chirp/ui/assets/icons` - Trash icon
- `@chirp/ui/assets/fleet-icons` - Photo upload icon

## Examples

### Basic Usage
```tsx
const [imageUrl, setImageUrl] = useState('');

const handleImageLoad = (file: File) => {
  const url = URL.createObjectURL(file);
  setImageUrl(url);
};

const handleImageRemove = () => {
  setImageUrl('');
};

<ImagePreview
  previewUrl={imageUrl}
  onLoad={handleImageLoad}
  onRemove={handleImageRemove}
/>;
```

### Custom Dimensions and Text
```tsx
<ImagePreview
  width="300px"
  height="250px"
  borderRadius="8px"
  title="Company Logo"
  subTitle="Upload your company logo (PNG/JPG)"
  onLoad={handleLogoUpload}
/>;
```

### With Input Ref
```tsx
const inputRef = useRef<HTMLInputElement>(null);

const triggerFileInput = () => {
  inputRef.current?.click();
};

<>
  <ImagePreview
    inputRef={inputRef}
    onLoad={handleImageLoad}
    title="Click to upload"
  />
  <Button onClick={triggerFileInput}>
    Select Image Manually
  </Button>
</>;
```

## Performance Considerations

- Uses FileReader for image previews (consider memory usage for large files)
- Proper cleanup of object URLs when components unmount
- Efficient re-rendering with conditional rendering

## Browser Support

- Modern browsers with File API support
- Drag and drop support
- FileReader API support
- CSS Grid and Flexbox support

## Notes

- The component handles base64 encoding internally for previews
- Consider revoking object URLs when they are no longer needed
- File size validation should be implemented in the parent component
- The component does not handle multiple file uploads (single file only)
- Works with both mouse and touch interactions

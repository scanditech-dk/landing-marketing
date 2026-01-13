# Orbiting Icons Component

A standalone, reusable component for displaying icons in concentric rotating rings. Perfect for showcasing integrations, partners, or technology stacks.

## Files

To use this component in another project, copy these files:

1. `components/orbiting-icons.tsx` - The main component
2. `components/orbiting-icons.css` - Required CSS styles and animations

## Installation

### Option 1: With Tailwind CSS (Recommended)

If your project uses Tailwind CSS, you can use the component as-is. The CSS file includes all necessary styles.

### Option 2: Without Tailwind CSS

The component uses minimal Tailwind classes. You can either:
- Add Tailwind CSS to your project
- Replace the Tailwind classes with regular CSS (see inline styles in the component)

## Usage

### Basic Example

```tsx
import { OrbitingIcons } from './components/orbiting-icons';
import { Logo1, Logo2, Logo3, Logo4 } from './icons';

function MyComponent() {
  const icons = [Logo1, Logo2, Logo3, Logo4, Logo1, Logo2, Logo3, Logo4];
  
  return (
    <div>
      <OrbitingIcons icons={icons} />
    </div>
  );
}
```

### Advanced Example

```tsx
import { OrbitingIcons } from './components/orbiting-icons';
import {
  SupabaseLogo,
  OpenAILogo,
  MetaLogo,
  SlackLogo,
  NotionLogo,
  LinearLogo,
  AnthropicLogo,
  GoogleIcon,
  FacebookIcon,
  AppleIcon,
} from './icons';

function MyComponent() {
  const icons = [
    SupabaseLogo,
    OpenAILogo,
    MetaLogo,
    SlackLogo,
    NotionLogo,
    LinearLogo,
    AnthropicLogo,
    SupabaseLogo,
    OpenAILogo,
    MetaLogo,
    GoogleIcon,
    FacebookIcon,
    AppleIcon,
  ];

  return (
    <div className="relative min-h-[600px] flex items-center justify-center">
      <OrbitingIcons
        icons={icons}
        size={800}
        numRings={3}
        showRings={true}
        iconSize={56}
        className="absolute inset-0"
      />
    </div>
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `icons` | `SvgComponent[]` | **required** | Array of icon/logo components (React components that render SVG) |
| `size` | `number` | `800` | Size of the orbit container in pixels |
| `className` | `string` | `undefined` | Additional CSS classes for the container |
| `showRings` | `boolean` | `true` | Show background rings |
| `ringDurationsSec` | `number[]` | `undefined` | Custom rotation durations for each ring in seconds (overrides default) |
| `numRings` | `number` | `3` | Number of concentric rings |
| `iconSize` | `number` | `56` | Size of each icon container in pixels |
| `iconClassName` | `string` | `undefined` | Custom className for icon containers (overrides default styling) |

## Icon Component Requirements

Icons must be React components that accept SVG props:

```tsx
type SvgComponent = React.ComponentType<React.SVGProps<SVGSVGElement>>;
```

Example icon component:

```tsx
export const MyLogo = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {/* SVG content */}
    </svg>
  );
};
```

## Customization

### Custom Icon Styling

```tsx
<OrbitingIcons
  icons={icons}
  iconClassName="custom-icon-class"
  iconSize={64}
/>
```

Then add your custom styles:

```css
.custom-icon-class {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border: 2px solid #fff;
}
```

### Custom Ring Durations

```tsx
<OrbitingIcons
  icons={icons}
  ringDurationsSec={[20, 30, 40]} // 20s, 30s, 40s for each ring
/>
```

### Dark Mode Support

The component includes dark mode styles. Ensure your project has a `.dark` class on a parent element (or use your preferred dark mode implementation).

## Dependencies

- React (with TypeScript support)
- CSS (for animations and styling)

No external libraries required! The component is fully self-contained.

## Browser Support

Works in all modern browsers that support:
- CSS animations
- CSS transforms
- CSS custom properties (for dynamic durations)

## Notes

- Icons are automatically distributed across rings (fewer in inner rings, more in outer rings)
- Rings alternate rotation direction (clockwise/counter-clockwise)
- Icons counter-rotate to stay upright
- Each ring has a different rotation speed by default (18s, 26s, 34s for 3 rings)

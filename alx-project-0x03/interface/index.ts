// interface/index.ts
export interface HomeProps {
  title: string;
}
export interface PageRouteProps {
    pageRoute: string;
}
export interface LayoutProps {
  children: React.ReactNode;
}
// interface/index.ts
export interface ButtonProps {
  label: string
  size?: 'sm' | 'md' | 'lg'
  color?: 'red' | 'blue' | 'orange' | 'green' | 'gray'
  onClick?: () => void
}

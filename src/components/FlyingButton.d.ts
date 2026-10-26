import React, { ReactNode, CSSProperties } from 'react';

export interface FlyingButtonProps {
  id?: string;
  children?: ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  theme?: 'dark' | 'light';
  size?: 'small' | 'medium' | 'large' | 'extra-large';
  align?: 'left' | 'center' | 'right';
  alignOffset?: number;
  radius?: number;
  altitude?: number;
  hoverTime?: number;
  jets?: number;
  thrusters?: boolean;
  trigger?: 'hover' | 'click';
  carryCursor?: boolean;
  ramp?: boolean;
  rampColor?: string;
  smoke?: number;
  turbulence?: number;
  wobble?: number;
  thrustColor?: string;
  smokeColor?: string;
  buttonColor?: string;
  textColor?: string;
  className?: string;
  style?: CSSProperties;
}

export default function FlyingButton(props: FlyingButtonProps): React.JSX.Element;

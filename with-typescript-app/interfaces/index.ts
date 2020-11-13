// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import User from 'path/to/interfaces';
import { BaseCSSProperties } from '@material-ui/core/styles/withStyles';

export type User = {
  id: number
  name: string
}

export interface StyleProps {
  root: BaseCSSProperties,
  // linkText: string,
}

export interface div {
  clicked: React.MouseEventHandler<HTMLDivElement>;
}
export type PropsClasses = Record<keyof StyleProps, string>
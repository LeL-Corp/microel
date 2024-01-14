import * as React from 'react';
import { styled } from '@mui/system';

const Container = styled('div')(
  ({
    nowidth,
    fullHeight,
    alignItems,
    alignSelf,
    justifyContent,

    width,
    centered,
    small,
  }) => ({
    display: 'flex',
    flexFlow: 'column',

    width: `${small ? '70%' : nowidth ? 'auto' : width ? width : '100%'}`,
    height: `${fullHeight ? '100%' : 'auto'}`,

    gap: '1rem',
    alignItems: `${alignItems ? alignItems : 'auto'}`,
    alignSelf: `${alignSelf ? alignSelf : 'auto'}`,
    justifyContent: `${justifyContent ? justifyContent : 'auto'}`,
    margin: `${small ? '0 auto' : centered ? 'auto' : '0'}`,
  }),
);

export default function ColumnContainer({
  children,
  small,
  nowidth,

  ref,
  ...props
}) {
  return (
    <Container
      ref={ref}
      small={small ? 1 : 0}
      nowidth={nowidth ? 1 : 0}
      {...props}
    >
      {children}
    </Container>
  );
}

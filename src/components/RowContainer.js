import { styled } from '@mui/system';

const StyledContainer = styled('div')(
  ({
    noJustify,
    center,
    end,
    start,

    align,
    padding,

    relative,
  }) => ({
    display: 'flex',
    padding: padding ?? 0,
    gap: '1rem',
    justifyContent: `${
      noJustify
        ? 'initial'
        : center
        ? 'center'
        : end
        ? 'flex-end'
        : start
        ? 'flex-start'
        : 'space-between'
    }`,
    alignItems: `${
      align === 'end' ? 'end' : align === 'start' ? 'start' : 'center'
    }`,

    position: `${relative ? 'relative' : 'initial'}`,
  }),
);

export default function RowContainer({ children, end, ...props }) {
  return (
    <StyledContainer end={end ? 1 : 0} {...props}>
      {children}
    </StyledContainer>
  );
}

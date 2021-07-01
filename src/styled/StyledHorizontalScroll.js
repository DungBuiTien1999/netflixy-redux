import styled from 'styled-components';

const StyledHorizontalScroll = styled.div`
  flex: 1 1 0;
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  overflow: auto;

  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`;

export default StyledHorizontalScroll;

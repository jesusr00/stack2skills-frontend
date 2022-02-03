import { Grow, Typography, PageTitleContainer } from './styles';
import { ReactNode } from 'react';

function PageTitle({
  title,
  children,
  disableMarginBottom,
  subtitle,
}: {
  children?: ReactNode;
  title: string;
  subtitle?: string;
  disableMarginBottom: boolean;
}): JSX.Element {
  return (
    <PageTitleContainer disableMarginBottom={disableMarginBottom}>
      <div>
        <Typography variant="h4">{title}</Typography>
        {subtitle && <Typography variant="h6">{subtitle}</Typography>}
      </div>
      <Grow />
      <div>{children}</div>
    </PageTitleContainer>
  );
}
export default PageTitle;

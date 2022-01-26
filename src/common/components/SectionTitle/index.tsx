import { Toolbar, Typography, Divider } from '@mui/material';

interface SectionTitleProps {
  title: string;
  actions?: string[];
}

export default function SectionTitle({ title, actions }: SectionTitleProps) {
  return (
    <Toolbar>
      <Typography>{title}</Typography>
      <Divider orientation="horizontal" />
    </Toolbar>
  );
}

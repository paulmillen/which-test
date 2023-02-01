import { Button, Typography } from "@mui/material";

interface Props {
  number: number;
  isHighlighted: boolean;
  isSelected: boolean;
  onClick(): void;
}

export const NumberButton: React.FC<Props> = ({
  number,
  isHighlighted,
  isSelected,
  onClick,
}) => (
  <Button
    variant={isHighlighted ? "contained" : "outlined"}
    onClick={onClick}
    sx={{ width: 300, height: 300 }}
    aria-pressed={isSelected}
    aria-label={
      isHighlighted ? `number ${number} highlighted` : `number ${number}`
    }
  >
    <Typography sx={{ fontSize: "8rem" }}>{number}</Typography>
  </Button>
);

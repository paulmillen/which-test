import { Grid } from "@mui/material";
import { useState } from "react";
import { NumberButton } from "./NumberButton";

interface Props {
  highestNumber: number;
}

export const NumberGrid: React.FC<Props> = ({ highestNumber }) => {
  const [selected, setSelected] = useState<number>(0);

  const handleClick = (value: number) => {
    if (selected === value) {
      setSelected(0);
    } else {
      setSelected(value);
    }
  };

  return (
    <Grid
      container
      spacing={{ xs: 1, md: 3 }}
      columns={{ xs: 1, sm: 1, md: 2, lg: 3 }}
    >
      {[...Array(highestNumber)].map((_, index) => (
        <Grid
          item
          xs={1}
          sm={1}
          md={1}
          key={index}
          sx={{ textAlign: "-webkit-center" }}
        >
          <NumberButton
            number={index + 1}
            isHighlighted={(index + 1) % selected === 0}
            isSelected={index + 1 === selected}
            onClick={() => handleClick(index + 1)}
          />
        </Grid>
      ))}
    </Grid>
  );
};

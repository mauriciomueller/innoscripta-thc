import { Chip, Tooltip } from "@mui/material";

export const FilterChip: React.FC<{
  label: string;
  onDelete?: () => void;
  isDeletable?: boolean;
}> = ({ label, onDelete, isDeletable = true }) => {
  const chip = (
    <Chip
      label={label}
      variant="outlined"
      onDelete={isDeletable ? onDelete : undefined}
      sx={{
        color: "white",
        fontWeight: "bold",
        fontSize: "1rem",
        borderColor: "white",
        transition: "background-color 0.3s, color 0.3s",
        "& .MuiChip-deleteIcon": {
          color: "white",
        },
        "& .MuiChip-deleteIcon:hover ~ &": {
          backgroundColor: "var(--color-secondary)",
          color: "white",
          borderColor: "var(--color-secondary)",
        },
        "& .MuiChip-deleteIcon:hover": {
          color: "var(--color-secondary)",
        },
      }}
    />
  );

  return isDeletable ? (
    chip
  ) : (
    <Tooltip title="Sources filter cannot be removed">{chip}</Tooltip>
  );
};

import Link from "next/link";
import Typography from "@mui/material/Typography";


function Copyright(props: any) {
    const { fdprocessedid, ...rest } = props;
    return (
      <Typography
        variant="body2"
        color="text.secondary"
        align="center"
        {...rest}
      >
        {"Copyright © "}
        <Link color="inherit" href="">
          Bug Tracker
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    );
  }

export default Copyright;
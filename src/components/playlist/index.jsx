import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import "./style.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  height: 400,
  bgcolor: "#515E63",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const CreatePlaylist = ({ list, handleChange, handleSubmit }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className="create-playlist">
      <Fab
        onClick={handleOpen}
        color="primary"
        aria-label="add"
        style={{
          position: "fixed",
          right: "25px",
          bottom: "30px",
          overflow: "hidden",
        }}
      >
        <AddIcon />
      </Fab>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography variant="h2"> Create Playlist</Typography>
          <form onSubmit={handleSubmit}>
            <Typography variant="h5" mt="5px" fontWeight="bold">
              Title
            </Typography>
            <input
              size="30"
              className="playlist-title"
              type="text"
              placeholder="Insert Playlist Title"
              name="title"
              minLength="10"
              value={list.title}
              onChange={handleChange}
            />
            <Typography variant="h5" mt="5px" fontWeight="bold">
              Description
            </Typography>
            <textarea
              cols="30"
              rows="5"
              className="playlist-description"
              placeholder=" 
            Insert Playlist Description "
              name="description"
              value={list.description}
              onChange={handleChange}
            />
            <br />
            <br />
            <input
              className="playlist-submit"
              type="submit"
              value="Create Playlist"
            />
          </form>
        </Box>
      </Modal>
    </div>
  );
};
export default CreatePlaylist;

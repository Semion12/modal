import { Box } from '@mui/system';
import { ImageListItem, Modal, Typography } from '@mui/material';
export const ModalWindow = ({ handleClick, isOpen }) => {


    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: '#eee',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,

    };



    return (
        <Modal

            open={isOpen}
            onClick={handleClick}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>

                <ImageListItem>
                    <img
                        src={'https://i.pinimg.com/originals/b1/02/dc/b102dcda56577ee8b860b89dadf0f4c0.jpg'}
                        
                        alt={'картинка'}
                        loading="lazy"
                    />
                </ImageListItem>
            </Box>
        </Modal>
    )
}

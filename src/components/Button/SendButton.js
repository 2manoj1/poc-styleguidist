import PropTypes from 'prop-types';
import { IconButton } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';

const SendButton = ({ onClick, fontSize, ...rest }) => {
    return (
        <IconButton onClick={onClick} aria-label="send" {...rest}>
            <SendIcon fontSize={fontSize || 'default'} />
        </IconButton>
    );
};

SendButton.prototype = {
    onClick: PropTypes.func.isRequired,
    fontSize: PropTypes.string
}

export default SendButton;
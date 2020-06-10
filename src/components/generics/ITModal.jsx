import React from 'react'
import { Modal } from '@material-ui/core'
import { useStyles, getModalStyle } from '../screen/main/fragments/ProblemasFragment'
export function ITModal({ body, isOpen, onClose }) {
  const classes = useStyles()
  const [modalStyle] = React.useState(getModalStyle)
  const content = (
    <div style={modalStyle} className={classes.paper}>
      {body}
    </div>
  )
  return (
    <div>
      <Modal
        open={isOpen}
        onClose={onClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description">
        {content}
      </Modal>
    </div>
  )
}

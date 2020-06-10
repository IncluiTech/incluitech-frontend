import React from 'react'
import { makeStyles } from '@material-ui/core'
import { Modal } from '@material-ui/core'

export function ITModal({ body, isOpen, onClose }) {

  const [modalStyle] = React.useState(() => {
    return {
      top: `50%`,
      left: `50%`,
      transform: `translate(-50%, -50%)`,
    }
  })

  const style = makeStyles(theme => ({
    paper: {
      position: 'absolute',
      width: 600,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }))()

  const content = (
    <div style={modalStyle} className={style.paper}>
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

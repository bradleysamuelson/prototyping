import type { CSSProperties, FC } from 'react'
import { memo } from 'react'
import { useDrop } from 'react-dnd'
import cx from 'classnames';

const style: CSSProperties = {
//   height: '12rem',
//   width: '12rem',
//   marginRight: '1.5rem',
//   marginBottom: '1.5rem',
//   color: 'white',
//   padding: '1rem',
//   textAlign: 'center',
//   fontSize: '1rem',
//   lineHeight: 'normal',
//   float: 'left',
}

export interface DragAreaProps {
  accept: string[]
  lastDroppedItem?: any
  onDrop: (item: any) => void
  children: any
  id?: string
  onClick?: any
}

export const DragArea: FC<DragAreaProps> = memo(function DragArea({
  accept,
  children,
  lastDroppedItem,
  onDrop,
  id,
  onClick
}) {
  const [{ isOver, canDrop }, drop] = useDrop({
    accept,
    drop: onDrop,
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  })

  const isActive = isOver && canDrop
//   let backgroundColor = 'white'
//   if (isActive) {
//     backgroundColor = 'darkgreen'
//   } else if (canDrop) {
//     backgroundColor = 'darkkhaki'
//   }

  return (
    <div id={id} className={cx('drop-area', {'drop-area-active' : isActive}, {'drop-area-active' : canDrop})} ref={drop} onClick={onClick} >
      {/* {isActive
        ? 'Release to drop'
        : `${accept.join(', ')}`} */}
        {`${accept.join(', ')}`}
      {/* {lastDroppedItem && (
        <p>Last dropped: {JSON.stringify(lastDroppedItem)}</p>
      )} */}
      {children}
    </div>
  )
})

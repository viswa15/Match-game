import './index.css'

const Thumbnail = props => {
  const {imageDetails, onClickThumbnail} = props
  const {thumbnailUrl, id} = imageDetails
  const onClickThumbnailItem = () => {
    onClickThumbnail(id)
  }

  return (
    <li className="thumbnail-item">
      <button
        className="thumbnail-btn"
        type="button"
        onClick={onClickThumbnailItem}
      >
        <img src={thumbnailUrl} alt="thumbnail" className="thumbnail-img" />
      </button>
    </li>
  )
}

export default Thumbnail

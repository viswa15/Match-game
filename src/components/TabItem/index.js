import './index.css'

const TabItem = props => {
  const {tabDetails, activeTabId, onClickTabBtn} = props
  const {displayText, tabId} = tabDetails
  const activeTabCls =
    activeTabId === tabId ? 'tab-btn active-tab-btn' : 'tab-btn'
  const onClickTab = () => {
    onClickTabBtn(tabId)
  }

  return (
    <li className="tab-item">
      <button className={activeTabCls} type="button" onClick={onClickTab}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem

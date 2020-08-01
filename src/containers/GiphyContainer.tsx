import { connect, MapStateToProps, MapDispatchToProps } from 'react-redux'
import { giphyCall } from '../store/giphy/actions'
import { RootState } from '../store'
import Giphy, { GiphyStateProps, GiphyDispatchProps } from './Giphy'

const mapStateToProps: MapStateToProps<GiphyStateProps, unknown, RootState> = ({ giphy }) => ({
  term: giphy.term,
  page: giphy.page,
  data: giphy.result.data,
  pagination: giphy.result.pagination,
  isFetching: giphy.isFetching,
  error: giphy.error,
})

const mapDispatchToProps: MapDispatchToProps<GiphyDispatchProps, unknown> = {
  giphyCall,
}

export default connect(mapStateToProps, mapDispatchToProps)(Giphy)

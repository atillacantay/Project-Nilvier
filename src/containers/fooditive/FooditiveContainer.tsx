import { connect, MapStateToProps, MapDispatchToProps } from 'react-redux'
import { fetchProducts } from '../../store/fooditive/actions'
import { RootState } from '../../store'
import Fooditive, { FooditiveDispatchProps, FooditiveStateProps } from './Fooditive'

const mapStateToProps: MapStateToProps<FooditiveStateProps, unknown, RootState> = ({ fooditive }) => ({
  categories: fooditive.categories,
  isFetching: fooditive.isFetching,
  error: fooditive.error,
})

const mapDispatchToProps: MapDispatchToProps<FooditiveDispatchProps, unknown> = {
  fetchProducts,
}

export default connect(mapStateToProps, mapDispatchToProps)(Fooditive)

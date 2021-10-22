import React, { useEffect } from 'react';
import { Pagination, PaginationItem } from '@material-ui/lab';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import useStyle from './styles';
import {getPosts} from '../action/posts';


const Paginate = ({ page }) => {
  const classes = useStyle();
  const dispatch = useDispatch()
  const {numberOfPages} = useSelector(state => state.posts)

  useEffect(() => {
   if(page)  dispatch(getPosts(page))
  }, [page])

  return (
    <>
      <Pagination
        className={{ ul: classes.ul }}
        count={numberOfPages}
        color='primary'
        page={Number(page) ||1}
        variant='outlined'
        renderItem={(item) => (
          <PaginationItem {...item} component={Link} to={`/post?page=${item.page}`} />
        )}

      />

    </>
  )
}

export default Paginate;




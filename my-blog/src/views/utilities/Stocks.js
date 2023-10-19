import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Chip,
  Button,
  Checkbox,
} from '@mui/material';
import DashboardCard from '../../components/shared/DashboardCard';
import axios from '../../api/api';
import CustomTextField from 'src/components/forms/theme-elements/CustomTextField';

const Stocks = () => {
  const [items, setItems] = useState([]);
  const [searchText, setSearchText] = useState();
  const [searchTextBefore, setSearchTextBefore] = useState();
  async function getResult() {
    if (searchText == null) {
      const result = await axios.get('/stocks', {});
      setItems(result.data.response.body.items.item);
    } else {
      const result = await axios.get(`/stocks?text=${searchText}`, {});
      setItems(result.data.response.body.items.item);
    }
  }
  const searchOnClick = () => {
    setSearchText(searchTextBefore);
  };
  useEffect(() => {
    getResult();
  }, [searchText]);

  return (
    <DashboardCard title="주식">
      검색어
      <CustomTextField
        onChange={(e) => {
          setSearchTextBefore(e.target.value);
        }}
      ></CustomTextField>
      <Button color="primary" variant="contained" disableElevation onClick={searchOnClick}>
        검색
      </Button>
      <Box sx={{ overflow: 'auto', width: { xs: '280px', sm: 'auto' } }}>
        <Table
          aria-label="simple table"
          sx={{
            whiteSpace: 'nowrap',
            mt: 2,
          }}
        >
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography variant="subtitle2" fontWeight={600}>
                  종목명
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="subtitle2" fontWeight={600}>
                  기준일자
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="subtitle2" fontWeight={600}>
                  종가
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map((item) => (
              <TableRow key={item.title}>
                <TableCell>
                  <Typography
                    sx={{
                      fontSize: '15px',
                      fontWeight: '500',
                    }}
                  >
                    {item.itmsNm}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    <Box>
                      <Typography
                        color="textSecondary"
                        sx={{
                          fontSize: '13px',
                        }}
                      >
                        {item.basDt}
                      </Typography>
                    </Box>
                  </Box>
                </TableCell>

                <TableCell>
                  <Typography
                    color="textSecondary"
                    sx={{
                      fontSize: '13px',
                    }}
                  >
                    {item.clpr}
                  </Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </DashboardCard>
  );
};

export default Stocks;
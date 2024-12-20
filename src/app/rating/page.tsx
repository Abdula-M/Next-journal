import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Typography,
    Tabs,
    Tab,
  } from '@mui/material';
  import FollowButton from '@/components/followButton/FollowButton';
  import {MainLayout} from "../../layouts/MainLayout";
  
  export default function Rating() {
    return (
        <MainLayout hideComments>
        <Paper className="pl-[20px] pt-[20px] pr-[20px] mb-[20px]" elevation={0}>
            <Typography variant="h5" style={{ fontWeight: 'bold', fontSize: 30, marginBottom: 6 }}>
                Рейтинг сообществ и блогов
            </Typography>
            <Typography style={{ fontSize: 15 }}>
                Десять лучших авторов и комментаторов, а также администраторы первых десяти сообществ из
                рейтинга по итогам месяца бесплатно получают Plus-аккаунт на месяц.
            </Typography>
            <Tabs className="mt-[10px]" value={0} indicatorColor="primary" textColor="primary">
                <Tab label="Август" />
                <Tab label="За 3 месяца" />
                <Tab label="За всё время" />
            </Tabs>
            </Paper>
    
            <Paper elevation={0}>
            <Table aria-label="simple table">
                <TableHead>
                <TableRow>
                    <TableCell>Имя пользователя</TableCell>
                    <TableCell align="right">Рейтинг</TableCell>
                    <TableCell align="right"></TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                <TableRow>
                    <TableCell component="th" scope="row">
                    <span className="mr-[15px]">1</span>Вася Пупкин
                    </TableCell>
                    <TableCell align="right">540</TableCell>
                    <TableCell align="right">
                        <FollowButton/>
                    </TableCell>
                </TableRow>
                </TableBody>
            </Table>
            </Paper>
        </MainLayout>
    );
  }
  
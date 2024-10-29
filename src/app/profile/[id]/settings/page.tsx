import { Button, Divider, Paper, TextField, Typography } from '@mui/material';
import {MainLayout} from '@/layouts/MainLayout';

export default function Settings() {
  return (
      <MainLayout hideComments>
        <Paper className="p-[20px]" elevation={0}>
          <Typography variant="h6">Основные настройки</Typography>
          <Divider className="mt-[20px] mb-[30]px" />
          <form>
            <TextField
              className="mt-[20px]"
              size="small"
              label="Никнейм"
              variant="outlined"
              fullWidth
              required
            />
            <TextField
              className="mt-[20px]"
              size="small"
              label="Эл. почта"
              variant="outlined"
              fullWidth
              required
            />
            <TextField className="mt-[20px]" size="small" label="Пароль" variant="outlined" fullWidth required />
            <Divider className="mt-[30px] mb-[20px]" />
            <Button  color="primary" variant="contained">
              Сохранить изменения
            </Button>
          </form>
        </Paper>
      </MainLayout>
  );
}

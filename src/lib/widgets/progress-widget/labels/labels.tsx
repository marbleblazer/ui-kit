import { Box, Stack, Theme } from '@mui/material';
import { IProgressSegment } from '..';
import { Typography } from '../../../typogrpahy';

export const Labels: React.FC<{ data: IProgressSegment[]; theme: Theme }> = ({ data, theme }) => (
    <Stack direction="row" gap="16px">
        {data.map((item) => (
            <Box key={item.label} display="flex" alignItems="center" gap="8px">
                <Box width="4px" height="4px" borderRadius="50%" bgcolor={item.color} />
                <Typography variant="caption12" color={theme.palette.text.textInput80}>
                    {item.label}
                </Typography>
            </Box>
        ))}
    </Stack>
);

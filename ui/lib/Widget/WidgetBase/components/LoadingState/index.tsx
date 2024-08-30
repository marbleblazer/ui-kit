import { Box, Stack, useTheme } from '@mui/material';

import * as S from '../../style';
import { Skeleton } from '@ui/lib/skeleton';
import { FlatLinearGraph } from '@ui/lib/Widget/FlatLinearGraph';
import { TextSkeleton } from '@ui/lib/text-skeleton';

type LoadingStateProps = {
    withSensor?: boolean;
    showGraph?: boolean;
    isGraphicWidget: boolean;
};

export const LoadingState: React.FC<LoadingStateProps> = ({ withSensor, showGraph, isGraphicWidget }) => {
    const theme = useTheme();

    return (
        <S.Card>
            <Stack p="20px" direction="row" alignItems="flex-start" justifyContent="space-between">
                <Stack maxWidth="50%">
                    <Stack alignItems="center" direction="row">
                        <TextSkeleton sx={{ marginBottom: '4px' }} />
                    </Stack>
                    <TextSkeleton />
                    {isGraphicWidget && (
                        <Box
                            sx={{
                                height: '28px',
                                width: '28px',
                                borderRadius: '8px',
                                marginTop: '20px',
                                overflow: 'hidden',
                            }}
                        >
                            <Skeleton />
                        </Box>
                    )}
                </Stack>
                {showGraph && isGraphicWidget && (
                    <Box width="50%" height="64px" display="flex" justifyContent="end" gap="32px" padding="4px">
                        <Stack paddingTop="24px">
                            <TextSkeleton height={theme.typography.h1.lineHeight} />
                        </Stack>

                        <Box minWidth="8px" overflow="hidden" borderRadius="8px">
                            <Skeleton />
                        </Box>
                    </Box>
                )}
            </Stack>
            {isGraphicWidget &&
                (showGraph ? (
                    <Box height="50px" flexGrow={1} maxHeight="50%">
                        <FlatLinearGraph
                            chartData={null}
                            calculatedValues={{ min: null, max: null, avg: null }}
                            color={theme.palette.text.secondary}
                        />
                    </Box>
                ) : (
                    <Box
                        width="100%"
                        height="132px"
                        minHeight="50%"
                        textAlign="center"
                        display="flex"
                        flexDirection="column"
                        justifyContent="end"
                        position="absolute"
                        bottom={0}
                    >
                        <Box marginBottom="4px" paddingX="20px">
                            <Box height="64px">
                                <TextSkeleton height={theme.typography.h1.lineHeight} />
                            </Box>
                            <Box
                                sx={{
                                    height: '10px',
                                    borderRadius: '8px',
                                    overflow: 'hidden',
                                }}
                            >
                                <Skeleton />
                            </Box>
                        </Box>
                        <Box sx={{ height: '48px' }}>
                            <Skeleton />
                        </Box>
                    </Box>
                ))}
            {!isGraphicWidget && (
                <>
                    <Box width="100%" textAlign="center">
                        <Box height="40px" marginX="20px" marginBottom="10px" borderRadius="8px" overflow="hidden">
                            <Skeleton />
                        </Box>
                        <Box sx={{ height: '48px', width: '100%' }}>
                            <Skeleton />
                        </Box>
                    </Box>
                </>
            )}
        </S.Card>
    );
};

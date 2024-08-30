import { ClickAwayListener, Stack, Tooltip, Typography } from '@mui/material';
import { FC, useEffect, useState } from 'react';

import { converter } from '../../../GraphicWidget/converter';
import { AttributeConfig, ValueBoundaries } from '../../../types';
import * as S from '../../style';
import { ValueBoundariesForm } from './components/ValueBoundariesForm';
import { Button } from '@ui/lib/button';
import { ManageIcon } from '@ui/icons';
import { Toggle } from '@ui/lib/toggle';
import { FilterItem } from '@ui/lib/filter-item';

type SettingsProps = {
    units: string;
    config: AttributeConfig;
    showGraph: boolean;
    showAlert: boolean;
    isBoundariesLoading: boolean;
    setValueBoundaries: (boundaries: ValueBoundaries) => void;
    setUnitsOfMeasurement: (value: string) => void;
    toggleAlertVisibility: () => void;
    toggleGraphVisibility?: () => void;
    onUnitsChange?: (shouldBeConverted: boolean) => void;
};

export const Settings: FC<SettingsProps> = ({
    showGraph,
    // showAlert,
    isBoundariesLoading,
    units,
    config,
    setValueBoundaries,
    setUnitsOfMeasurement,
    // toggleAlertVisibility,
    toggleGraphVisibility,
    onUnitsChange,
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const unitsConverter = converter[config.units];

    const handleTooltipClose = () => {
        setIsOpen(false);
    };

    const handleTooltipOpen = () => {
        setIsOpen(true);
    };

    const handleUnitsChange = (newUnits: string) => {
        if (onUnitsChange) onUnitsChange(unitsConverter && newUnits !== config.units);

        setUnitsOfMeasurement(newUnits);
    };

    useEffect(() => {
        if (onUnitsChange) onUnitsChange(unitsConverter && units !== config.units);
    }, [config.units, onUnitsChange, units, unitsConverter]);

    return (
        // TODO: dev UI component
        <Tooltip
            disableHoverListener
            open={isOpen}
            placement="bottom-end"
            title={
                <ClickAwayListener onClickAway={handleTooltipClose}>
                    <Stack minWidth="240px" py="10px">
                        {unitsConverter && (
                            <S.SettingsItem>
                                <Typography fontSize="12px">Units of measurement</Typography>
                                <S.UnitsOfMeasurementWrapper
                                    direction="row"
                                    spacing="4px"
                                    alignItems="center"
                                    ml="16px"
                                >
                                    <FilterItem
                                        onChange={() => handleUnitsChange(config.units)}
                                        label={config.units}
                                        checked={units === config.units}
                                        variant="secondary"
                                    />
                                    <FilterItem
                                        checked={units === unitsConverter.alternativeUnits}
                                        onChange={() => handleUnitsChange(unitsConverter.alternativeUnits)}
                                        label={unitsConverter.alternativeUnits}
                                        variant="secondary"
                                    />
                                </S.UnitsOfMeasurementWrapper>
                            </S.SettingsItem>
                        )}

                        {toggleGraphVisibility && (
                            <S.SettingsItem>
                                <Typography fontSize="12px">Show graph</Typography>
                                <Toggle
                                    name="show-graph"
                                    label={showGraph ? 'On' : 'Off'}
                                    checked={showGraph}
                                    isLoading={false}
                                    onChange={toggleGraphVisibility}
                                />
                            </S.SettingsItem>
                        )}

                        <S.SettingsItem>
                            <ValueBoundariesForm
                                isLoading={isBoundariesLoading}
                                valueFrom={config.valueFrom}
                                valueTo={config.valueTo}
                                onSave={setValueBoundaries}
                            />
                        </S.SettingsItem>

                        {/* {config.type === 'boolean' && (
              <S.SettingsItem>
                <Typography fontSize='12px'>Show alert</Typography>
                <Toggle
                  name='show-alert'
                  label={showAlert ? 'On' : 'Off'}
                  checked={showAlert}
                  isLoading={false}
                  onChange={toggleAlertVisibility}
                />
              </S.SettingsItem>
            )} */}
                    </Stack>
                </ClickAwayListener>
            }
        >
            <Button
                size="small"
                variant="text"
                sx={{
                    alignSelf: 'flex-start',
                    zIndex: 10,
                    color: 'lightShades.quaternary',
                    '&:hover': { color: 'lightShades.ternary' },
                }}
                onClick={handleTooltipOpen}
            >
                <ManageIcon />
            </Button>
        </Tooltip>
    );
};

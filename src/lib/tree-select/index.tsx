import React, { useRef, useState } from 'react';
import { Box, Popover, MenuItem, SelectProps } from '@mui/material';
import { SimpleTreeView } from '@mui/x-tree-view';
import { Select } from '../select';
import * as S from './style';
import { SelectIndicator } from '../select-indicator';

type TreeNodeType = {
    id: string;
    label: string;
    children?: TreeNodeType[];
};

interface TreeSelectProps {
    options: TreeNodeType[];
    label?: string;
    onChange?: (selectedValue: TreeNodeType) => void;
    width?: number | string;
    selectProps: SelectProps;
}

// FYI: если необходимо, можно воспроизвести работу с дженериком, но нужно будет вынести метод resolveTitle, resolveId
export const TreeSelect: React.FC<TreeSelectProps> = ({ options, onChange, width = '400px', selectProps }) => {
    const [selectedNode, setSelectedNode] = useState<TreeNodeType | null>(null);
    const [open, setOpen] = React.useState(false);
    const selectRef = useRef<HTMLDivElement | null>(null);

    const handleNodeSelect = (node: TreeNodeType, isParent?: boolean) => {
        setSelectedNode(node);
        if (onChange) {
            onChange(node);
        }
        !isParent && setOpen(false);
    };

    const renderTree = (nodes: TreeNodeType[]) =>
        nodes.map((node) => (
            <S.TreeItem
                key={node.id}
                itemId={node.id}
                label={node.label}
                onClick={() => handleNodeSelect(node, Array.isArray(node.children))}
            >
                {Array.isArray(node.children) ? renderTree(node.children) : null}
            </S.TreeItem>
        ));

    return (
        <Box sx={{ width }}>
            <div ref={selectRef}>
                <Select
                    {...selectProps}
                    value={selectedNode?.id || null}
                    displayEmpty
                    open={false}
                    onOpen={() => setOpen(true)}
                >
                    <MenuItem value={selectedNode?.id}>{selectedNode?.label}</MenuItem>
                </Select>
            </div>
            <Popover
                id="simple-popover"
                open={open}
                onClose={() => setOpen(false)}
                anchorEl={selectRef.current}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
            >
                <SimpleTreeView
                    sx={{ width: selectRef.current?.getBoundingClientRect().width }}
                    selectedItems={selectedNode?.id}
                    slots={{
                        expandIcon: SelectIndicator,
                    }}
                >
                    {renderTree(options)}
                </SimpleTreeView>
            </Popover>
        </Box>
    );
};

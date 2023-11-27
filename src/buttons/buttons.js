import React from 'react';
import { Spin } from 'antd';
import './buttons.scss';

export const BtnVariant = {
    PRIMARY: 'primary',
    SECONDARY: 'secondary',
    LINK: 'link',
    GRAY: 'gray',
    RED: 'red',
    WHITE: 'white',
};

export const BtnSize = {
    SMALL: 'small',
    MEDIUM: 'medium',
    LARGE: 'large',
};

export const BtnIconPosition = {
    LEFT: 'left',
    RIGHT: 'right',
};

export const SwishButton = ({
    className = '',
    variant = BtnVariant.PRIMARY,
    size = BtnSize.MEDIUM,
    iconPosition = BtnIconPosition.LEFT,
    icon = null,
    disabled = false,
    onClick = () => null,
    loading = false,
    children,
    ...res
}) => {
    const getColorClass = (variant) => {
        switch (variant) {
            case BtnVariant.PRIMARY:
                return 'btn-primary';
            case BtnVariant.SECONDARY:
                return 'btn-secondary';
            case BtnVariant.LINK:
                return 'btn-link';
            case BtnVariant.GRAY:
                return 'btn-gray';
            case BtnVariant.WHITE:
                return 'btn-white';
            case BtnVariant.RED:
                return 'btn-red';
            default:
                return 'btn-primary';
        }
    };

    const getSizeClass = (size) => {
        switch (size) {
            case BtnSize.SMALL:
                return 'btn-small';
            case BtnSize.MEDIUM:
                return 'btn-medium';
            case BtnSize.LARGE:
                return 'btn-large';
            default:
                return 'btn-medium';
        }
    };

    const classes = `btn ${getColorClass(variant)} ${getSizeClass(size)} ${disabled ? 'disabled' : ''
        }`;

    return (
        <button
            type="button"
            className={classes + " " + className}
            disabled={disabled}
            onClick={onClick}
            {...res}
        >
            <Spin spinning={loading} size="small">
                {icon ? (
                    <div className="btn-wrapper">
                        {iconPosition === BtnIconPosition.LEFT && icon}
                        <span className="btn-content">{children}</span>
                        {iconPosition === BtnIconPosition.RIGHT && icon}
                    </div>
                ) : (
                    <>{children}</>
                )}
            </Spin>
        </button>
    );
};

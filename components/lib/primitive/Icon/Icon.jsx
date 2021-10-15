import styled from 'styled-components';
import PropTypes from 'prop-types';
import { deviceWidthQuery, iconSize, color } from '@jbkr/style-service';

const pathSpecifications = {
	'arrow-up': [
		'M12 4C12.2652 4 12.5196 4.10536 12.7071 4.29289L18.7071 10.2929C19.0976 10.6834 19.0976 11.3166 18.7071 11.7071C18.3166 12.0976 17.6834 12.0976 17.2929 11.7071L13 7.41421L13 19C13 19.5523 12.5523 20 12 20C11.4477 20 11 19.5523 11 19L11 7.41421L6.70711 11.7071C6.31658 12.0976 5.68342 12.0976 5.29289 11.7071C4.90237 11.3166 4.90237 10.6834 5.29289 10.2929L11.2929 4.29289C11.4804 4.10536 11.7348 4 12 4Z',
	],
	'arrow-down': [
		'M12 4C12.5523 4 13 4.44772 13 5V16.5858L17.2929 12.2929C17.6834 11.9024 18.3166 11.9024 18.7071 12.2929C19.0976 12.6834 19.0976 13.3166 18.7071 13.7071L12.7071 19.7071C12.3166 20.0976 11.6834 20.0976 11.2929 19.7071L5.29289 13.7071C4.90237 13.3166 4.90237 12.6834 5.29289 12.2929C5.68342 11.9024 6.31658 11.9024 6.70711 12.2929L11 16.5858V5C11 4.44772 11.4477 4 12 4Z',
	],
	'arrow-left': [
		'M11.7071 5.29289C12.0976 5.68342 12.0976 6.31658 11.7071 6.70711L7.41421 11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H7.41421L11.7071 17.2929C12.0976 17.6834 12.0976 18.3166 11.7071 18.7071C11.3166 19.0976 10.6834 19.0976 10.2929 18.7071L4.29289 12.7071C4.10536 12.5196 4 12.2652 4 12C4 11.7348 4.10536 11.4804 4.29289 11.2929L10.2929 5.29289C10.6834 4.90237 11.3166 4.90237 11.7071 5.29289Z',
	],
	'arrow-right': [
		'M12.2929 5.29289C12.6834 4.90237 13.3166 4.90237 13.7071 5.29289L19.7071 11.2929C19.8946 11.4804 20 11.7348 20 12C20 12.2652 19.8946 12.5196 19.7071 12.7071L13.7071 18.7071C13.3166 19.0976 12.6834 19.0976 12.2929 18.7071C11.9024 18.3166 11.9024 17.6834 12.2929 17.2929L16.5858 13L5 13C4.44772 13 4 12.5523 4 12C4 11.4477 4.44772 11 5 11L16.5858 11L12.2929 6.70711C11.9024 6.31658 11.9024 5.68342 12.2929 5.29289Z',
	],
	'arrow-right-up': [
		'M8 7C8 6.44772 8.44772 6 9 6L17 6C17.5523 6 18 6.44772 18 7V15C18 15.5523 17.5523 16 17 16C16.4477 16 16 15.5523 16 15V9.41421L7.70711 17.7071C7.31658 18.0976 6.68342 18.0976 6.29289 17.7071C5.90237 17.3166 5.90237 16.6834 6.29289 16.2929L14.5858 8L9 8C8.44772 8 8 7.55228 8 7Z',
	],
	'arrow-right-down': [
		'M6.29289 6.29289C5.90237 6.68342 5.90237 7.31658 6.29289 7.70711L14.5858 16L9 16C8.44772 16 8 16.4477 8 17C8 17.5523 8.44772 18 9 18L17 18C17.5523 18 18 17.5523 18 17L18 9C18 8.44771 17.5523 8 17 8C16.4477 8 16 8.44771 16 9L16 14.5858L7.70711 6.29289C7.31658 5.90237 6.68342 5.90237 6.29289 6.29289Z',
	],
	'arrow-left-down': [
		'M17.7071 6.29289C18.0976 6.68342 18.0976 7.31658 17.7071 7.70711L9.41421 16L15 16C15.5523 16 16 16.4477 16 17C16 17.5523 15.5523 18 15 18L7 18C6.44772 18 6 17.5523 6 17L6 9C6 8.44771 6.44772 8 7 8C7.55228 8 8 8.44771 8 9L8 14.5858L16.2929 6.29289C16.6834 5.90237 17.3166 5.90237 17.7071 6.29289Z',
	],
	'arrow-left-up': [
		'M8 9.41421L8 15C8 15.5523 7.55228 16 7 16C6.44772 16 6 15.5523 6 15L6 7C6 6.44772 6.44772 6 7 6L15 6C15.5523 6 16 6.44772 16 7C16 7.55228 15.5523 8 15 8L9.41421 8L17.7071 16.2929C18.0976 16.6834 18.0976 17.3166 17.7071 17.7071C17.3166 18.0976 16.6834 18.0976 16.2929 17.7071L8 9.41421Z',
	],
	'chevron-up': [
		'M11.2929 7.29289C11.6834 6.90237 12.3166 6.90237 12.7071 7.29289L18.7071 13.2929C19.0976 13.6834 19.0976 14.3166 18.7071 14.7071C18.3166 15.0976 17.6834 15.0976 17.2929 14.7071L12 9.41421L6.70711 14.7071C6.31658 15.0976 5.68342 15.0976 5.29289 14.7071C4.90237 14.3166 4.90237 13.6834 5.29289 13.2929L11.2929 7.29289Z',
	],
	'chevron-down': [
		'M5.29289 9.29289C5.68342 8.90237 6.31658 8.90237 6.70711 9.29289L12 14.5858L17.2929 9.29289C17.6834 8.90237 18.3166 8.90237 18.7071 9.29289C19.0976 9.68342 19.0976 10.3166 18.7071 10.7071L12.7071 16.7071C12.3166 17.0976 11.6834 17.0976 11.2929 16.7071L5.29289 10.7071C4.90237 10.3166 4.90237 9.68342 5.29289 9.29289Z',
	],
	'chevron-left': [
		'M14.7071 5.29289C15.0976 5.68342 15.0976 6.31658 14.7071 6.70711L9.41421 12L14.7071 17.2929C15.0976 17.6834 15.0976 18.3166 14.7071 18.7071C14.3166 19.0976 13.6834 19.0976 13.2929 18.7071L7.29289 12.7071C6.90237 12.3166 6.90237 11.6834 7.29289 11.2929L13.2929 5.29289C13.6834 4.90237 14.3166 4.90237 14.7071 5.29289Z',
	],
	'chevron-right': [
		'M9.29289 18.7071C8.90237 18.3166 8.90237 17.6834 9.29289 17.2929L14.5858 12L9.29289 6.70711C8.90237 6.31658 8.90237 5.68342 9.29289 5.29289C9.68342 4.90237 10.3166 4.90237 10.7071 5.29289L16.7071 11.2929C17.0976 11.6834 17.0976 12.3166 16.7071 12.7071L10.7071 18.7071C10.3166 19.0976 9.68342 19.0976 9.29289 18.7071Z',
	],
	'chevron-double-up': [
		'M11.2929 5.29289C11.6834 4.90237 12.3166 4.90237 12.7071 5.29289L18.7071 11.2929C19.0976 11.6834 19.0976 12.3166 18.7071 12.7071C18.3166 13.0976 17.6834 13.0976 17.2929 12.7071L12 7.41421L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071C4.90237 12.3166 4.90237 11.6834 5.29289 11.2929L11.2929 5.29289ZM12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L11.2929 11.2929C11.6834 10.9024 12.3166 10.9024 12.7071 11.2929L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142Z',
	],
	'chevron-double-down': [
		'M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.2929C17.6834 4.90237 18.3166 4.90237 18.7071 5.2929C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L12.7071 12.7071C12.3166 13.0976 11.6834 13.0976 11.2929 12.7071L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289ZM5.29289 11.2929C5.68342 10.9024 6.31658 10.9024 6.70711 11.2929L12 16.5858L17.2929 11.2929C17.6834 10.9024 18.3166 10.9024 18.7071 11.2929C19.0976 11.6834 19.0976 12.3166 18.7071 12.7071L12.7071 18.7071C12.3166 19.0976 11.6834 19.0976 11.2929 18.7071L5.29289 12.7071C4.90237 12.3166 4.90237 11.6834 5.29289 11.2929Z',
	],
	'chevron-double-left': [
		'M18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L11.2929 12.7071C10.9024 12.3166 10.9024 11.6834 11.2929 11.2929L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289ZM12.7071 5.29289C13.0976 5.68342 13.0976 6.31658 12.7071 6.70711L7.41421 12L12.7071 17.2929C13.0976 17.6834 13.0976 18.3166 12.7071 18.7071C12.3166 19.0976 11.6834 19.0976 11.2929 18.7071L5.29289 12.7071C5.10536 12.5196 5 12.2652 5 12C5 11.7348 5.10536 11.4804 5.29289 11.2929L11.2929 5.29289C11.6834 4.90237 12.3166 4.90237 12.7071 5.29289Z',
	],
	'chevron-double-right': [
		'M11.2929 5.29289C11.6834 4.90237 12.3166 4.90237 12.7071 5.29289L18.7071 11.2929C19.0976 11.6834 19.0976 12.3166 18.7071 12.7071L12.7071 18.7071C12.3166 19.0976 11.6834 19.0976 11.2929 18.7071C10.9024 18.3166 10.9024 17.6834 11.2929 17.2929L16.5858 12L11.2929 6.70711C10.9024 6.31658 10.9024 5.68342 11.2929 5.29289ZM5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12.7071 11.2929C12.8946 11.4804 13 11.7348 13 12C13 12.2652 12.8946 12.5196 12.7071 12.7071L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z',
	],
	'snowflake': [
		'M13 3C13 2.44772 12.5523 2 12 2C11.4477 2 11 2.44772 11 3V5.58582L9.05023 3.63605C8.65971 3.24552 8.02654 3.24552 7.63602 3.63605C7.24549 4.02657 7.24549 4.65973 7.63602 5.05026L11 8.41424V11H8.41418L5.05023 7.63605C4.65971 7.24552 4.02654 7.24552 3.63602 7.63605C3.24549 8.02657 3.24549 8.65973 3.63602 9.05026L5.58576 11H3C2.44772 11 2 11.4477 2 12C2 12.5523 2.44772 13 3 13H5.58576L3.63603 14.9497C3.24551 15.3402 3.24551 15.9734 3.63603 16.3639C4.02656 16.7545 4.65972 16.7545 5.05025 16.3639L8.41419 13H11V15.5858L7.63603 18.9497C7.24551 19.3402 7.24551 19.9734 7.63603 20.3639C8.02656 20.7545 8.65972 20.7545 9.05025 20.3639L11 18.4142V21C11 21.5523 11.4477 22 12 22C12.5523 22 13 21.5523 13 21V18.4141L14.9497 20.3638C15.3402 20.7544 15.9734 20.7544 16.3639 20.3638C16.7545 19.9733 16.7545 19.3402 16.3639 18.9496L13 15.5857V13H15.5859L18.9497 16.3638C19.3402 16.7544 19.9734 16.7544 20.3639 16.3638C20.7545 15.9733 20.7545 15.3402 20.3639 14.9496L18.4143 13H21C21.5523 13 22 12.5523 22 12C22 11.4477 21.5523 11 21 11H18.4143L20.3639 9.05037C20.7545 8.65984 20.7545 8.02668 20.3639 7.63616C19.9734 7.24563 19.3403 7.24563 18.9497 7.63615L15.5859 11H13V8.41431L16.364 5.05035C16.7545 4.65983 16.7545 4.02666 16.364 3.63614C15.9734 3.24561 15.3403 3.24561 14.9497 3.63614L13 5.58588V3Z',
	],
	'package': [
		'M14.5 2C15.0906 1.9998 15.6717 2.14908 16.1892 2.43393C16.7066 2.71879 17.1435 3.12995 17.4592 3.62914C17.7749 4.12832 17.9592 4.69929 17.9948 5.28886C18.0305 5.87843 17.9163 6.46743 17.663 7.001L21 7C21.2652 7 21.5196 7.10536 21.7071 7.2929C21.8946 7.48043 22 7.73479 22 8V12C22 12.2652 21.8946 12.5196 21.7071 12.7071C21.5196 12.8946 21.2652 13 21 13H20V21C20 21.2652 19.8946 21.5196 19.7071 21.7071C19.5196 21.8946 19.2652 22 19 22H5C4.73478 22 4.48043 21.8946 4.29289 21.7071C4.10536 21.5196 4 21.2652 4 21V13H3C2.73478 13 2.48043 12.8946 2.29289 12.7071C2.10536 12.5196 2 12.2652 2 12V8C2 7.73479 2.10536 7.48043 2.29289 7.2929C2.48043 7.10536 2.73478 7 3 7L6.337 7.001C5.98076 6.25268 5.90163 5.40221 6.1137 4.601C6.32577 3.7998 6.81529 3.09985 7.4951 2.62576C8.17491 2.15167 9.0009 1.9342 9.82603 2.01207C10.6512 2.08994 11.4219 2.4581 12.001 3.051C12.326 2.71753 12.7147 2.45268 13.1439 2.27215C13.5732 2.09162 14.0343 1.99908 14.5 2V2ZM18 13H6V20H18V13ZM20 9H4V11H20V9ZM9.5 4C9.11478 4.00019 8.74441 4.14858 8.46561 4.41441C8.18682 4.68025 8.02099 5.04315 8.00248 5.42792C7.98396 5.81269 8.11419 6.18984 8.36618 6.48121C8.61816 6.77258 8.97258 6.95583 9.356 6.993L9.5 7H11V5.5C11 5.12712 10.8611 4.76761 10.6104 4.49158C10.3597 4.21556 10.0152 4.0428 9.644 4.007L9.5 4ZM14.5 4L14.356 4.007C14.0094 4.04021 13.6851 4.19298 13.4388 4.43911C13.1925 4.68525 13.0395 5.0094 13.006 5.356L13 5.5V7H14.5L14.644 6.993C15.015 6.95703 15.3594 6.7842 15.6099 6.50819C15.8605 6.23218 15.9993 5.87277 15.9993 5.5C15.9993 5.12724 15.8605 4.76783 15.6099 4.49182C15.3594 4.21581 15.015 4.04297 14.644 4.007L14.5 4Z',
	],
	'function': [
		'M14.8692 3.31868C13.2809 3.19853 11.1855 4.18619 9.95689 6.08831C9.79896 6.33282 9.69148 6.69624 9.5608 7.13812C9.55388 7.16153 9.54689 7.18516 9.53982 7.20901C9.48003 7.41081 9.40449 7.66107 9.30678 7.86251C9.25777 7.96353 9.1797 8.10327 9.05698 8.22619C8.92492 8.35847 8.70398 8.50502 8.40237 8.50502H6.29252C6.28853 8.50679 6.2832 8.50926 6.27686 8.51265C6.24219 8.53116 6.19275 8.56666 6.14073 8.62213C6.03069 8.73944 5.9701 8.87811 5.96226 8.98555C5.95072 9.14366 5.99476 9.22869 6.03647 9.27681C6.08206 9.32943 6.1771 9.39661 6.35854 9.41961C6.43785 9.42966 6.57532 9.42956 6.77615 9.4148C6.92145 9.40412 7.06865 9.38858 7.22205 9.37239C7.2755 9.36675 7.3297 9.36102 7.38484 9.3554C7.57371 9.33613 7.80636 9.31405 7.99463 9.322C8.07305 9.32532 8.24787 9.33557 8.4212 9.4157C8.51654 9.45978 8.6692 9.55135 8.77984 9.73133C8.90224 9.93046 8.91725 10.1458 8.87992 10.3204C8.70012 11.1617 8.37511 12.3748 7.98562 13.8286C7.68083 14.9662 7.33657 16.2512 6.99151 17.6207C6.89787 17.9923 6.63312 18.382 6.36871 18.6611C6.2271 18.8106 6.05609 18.9602 5.86325 19.077C5.6777 19.1895 5.41841 19.304 5.11574 19.304H3.24942C3.13045 19.304 3.03173 19.3498 2.94428 19.4484C2.84878 19.5561 2.77007 19.7287 2.75271 19.9395C2.73566 20.1467 2.80002 20.3544 2.90946 20.4995C3.01341 20.6373 3.13203 20.6912 3.24942 20.6912C6.31793 20.6912 8.10853 18.4771 8.69698 16.2268C8.76163 15.9796 8.82812 15.724 8.89584 15.4636C9.19322 14.3203 9.51424 13.0861 9.80611 12.0761C9.98467 11.4582 10.1583 10.903 10.3142 10.4954C10.3906 10.296 10.4738 10.102 10.5634 9.947C10.6066 9.87221 10.6705 9.77239 10.7586 9.68179C10.8254 9.61295 11.0349 9.41366 11.3686 9.41366H14.7982C15.4844 9.41366 15.9454 9.85709 16.1396 10.382C16.1643 10.4486 16.2021 10.544 16.244 10.6494C16.3138 10.8252 16.3946 11.0289 16.4436 11.1732C16.4904 11.3111 16.5382 11.4736 16.5619 11.6394C16.5841 11.7943 16.5982 12.0355 16.4972 12.2823C16.412 12.4902 16.1797 12.8831 15.892 13.3393C15.5872 13.8224 15.1772 14.4426 14.6934 15.1397C14.3336 15.6582 13.7522 15.6691 13.5355 15.6731C13.4622 15.6745 13.4121 15.6744 13.3708 15.6742C13.3172 15.674 13.2784 15.6739 13.2225 15.6773C13.1748 15.6801 13.1534 15.6848 13.1484 15.6859C12.9321 15.7818 12.8051 15.8794 12.7299 15.969C12.662 16.0499 12.6098 16.1552 12.594 16.3261C12.5761 16.5192 12.5904 16.6288 12.6108 16.6919C12.6253 16.737 12.6481 16.7791 12.7199 16.8316C12.9936 17.0313 13.3238 17.0651 13.6901 16.9609C14.0723 16.8523 14.4115 16.6114 14.5893 16.3985C14.8113 16.1326 15.0216 15.8067 15.2402 15.468C15.2998 15.3756 15.36 15.2823 15.4213 15.189C15.5521 14.9896 15.6981 14.775 15.8438 14.6073C15.9165 14.5237 16.0121 14.4245 16.1282 14.3417C16.2352 14.2655 16.441 14.1444 16.7157 14.1514C17.0089 14.159 17.2147 14.3096 17.3106 14.3909C17.418 14.4818 17.5053 14.5878 17.5697 14.6725C17.6719 14.8072 17.7847 14.982 17.888 15.1421C17.912 15.1794 17.9356 15.216 17.9584 15.251C18.2336 15.6741 18.5049 16.0485 18.8137 16.2662C19.2221 16.5542 19.3696 16.6504 19.5286 16.7C19.664 16.7423 19.871 16.7665 20.3936 16.6945C21.1919 16.5844 21.2396 16.1378 21.2323 16.0814C21.2011 15.8382 21.124 15.7091 21.0517 15.6364C20.9826 15.5668 20.8625 15.4928 20.639 15.4597C20.6348 15.4608 20.6295 15.4623 20.623 15.4643C20.5812 15.4772 20.5463 15.4918 20.4837 15.5178C20.4572 15.5289 20.4257 15.542 20.3866 15.5579C20.3824 15.5597 20.3779 15.5615 20.3733 15.5634C20.1886 15.6391 19.6859 15.8451 19.1691 15.5555C19.0253 15.4749 18.8814 15.3724 18.7538 15.2269C18.6269 15.0822 18.5451 14.9278 18.4844 14.7805C18.4014 14.5792 18.3111 14.366 18.2205 14.1522L18.2196 14.1501C18.1294 13.9373 18.0387 13.7234 17.9586 13.5283C17.8791 13.3349 17.8054 13.1492 17.7507 12.9938C17.7235 12.9166 17.6975 12.8369 17.6774 12.7619C17.6619 12.7042 17.6315 12.5851 17.6315 12.4542C17.6315 12.3124 17.671 12.1948 17.6829 12.1594L17.6835 12.1578C17.7023 12.1017 17.7249 12.0472 17.7456 12.0004C17.7876 11.9055 17.8424 11.7965 17.9009 11.6856C18.0193 11.4613 18.175 11.1881 18.3313 10.9225C18.4884 10.6555 18.6504 10.3889 18.7837 10.1756C18.9037 9.98365 19.0306 9.78552 19.1021 9.69593C19.5463 9.13913 20.1939 9.04741 20.5364 8.9989L20.5504 8.99692C20.5781 8.99299 20.6042 8.98933 20.6289 8.98587C20.7898 8.96329 20.8899 8.94924 20.9813 8.92414C21.0445 8.9068 21.0685 8.89246 21.0743 8.88833C21.1768 8.78334 21.2143 8.7081 21.2313 8.65275C21.2488 8.59569 21.2607 8.5072 21.2358 8.35293C21.1964 8.10897 21.1344 8.01536 21.0956 7.97364C21.0581 7.93333 20.9727 7.86637 20.7372 7.81404C20.3498 7.72795 19.9388 7.81962 19.6288 8.06029C19.4479 8.20072 19.2558 8.44498 18.9615 8.82008C18.7021 9.15078 18.3627 9.58177 17.9496 9.89203C17.7668 10.0293 17.4765 10.1591 17.1318 10.0719C16.8293 9.99541 16.6493 9.78878 16.5641 9.67446C16.4711 9.54968 16.4015 9.41144 16.3523 9.30693C16.3162 9.23038 16.2777 9.14197 16.2434 9.0635C16.2307 9.03442 16.2187 9.0067 16.2075 8.98145C16.11 8.76058 16.0364 8.61998 15.9645 8.53387C15.9532 8.52026 15.9445 8.51106 15.9384 8.50502H11.6968C11.239 8.50502 11.0241 8.15719 10.9611 7.9925C10.9033 7.84156 10.9001 7.70087 10.9005 7.63359C10.9013 7.47772 10.931 7.30888 10.9645 7.162C11.035 6.853 11.164 6.46571 11.3331 6.08597C11.5005 5.71021 11.7262 5.29894 12.0065 4.96844C12.265 4.66359 12.6985 4.27733 13.2908 4.27733H14.9258C14.9794 4.27733 15.0296 4.25946 15.086 4.1908C15.1508 4.11199 15.207 3.97872 15.2132 3.81812C15.219 3.66671 15.171 3.53565 15.103 3.4488C15.0396 3.36773 14.9617 3.32568 14.8692 3.31868ZM6.30253 8.50109C6.30253 8.5011 6.30217 8.50121 6.30146 8.5014ZM8.69687 5.27446C10.1825 2.97435 12.7743 1.65592 14.9824 1.82295C16.1107 1.90831 16.7487 2.92293 16.7121 3.87575C16.6796 4.7204 16.094 5.77733 14.9258 5.77733H13.324C13.3041 5.78857 13.2456 5.8265 13.1505 5.93862C12.9971 6.11956 12.8397 6.39021 12.7033 6.69638C12.6566 6.80135 12.6145 6.90542 12.5776 7.00502H15.9626C16.4986 7.00502 16.8764 7.28551 17.1161 7.5727C17.292 7.78338 17.42 8.02807 17.5129 8.22759C17.5976 8.12667 17.6863 8.01537 17.7814 7.89418C17.8003 7.87006 17.8197 7.84524 17.8395 7.81985C18.0754 7.51791 18.3747 7.13489 18.7089 6.87545C19.3751 6.3582 20.2435 6.16774 21.0626 6.34976C21.4856 6.44378 21.8847 6.61962 22.1939 6.95203C22.5018 7.28303 22.6486 7.69206 22.7167 8.11414C22.7686 8.43644 22.7658 8.76563 22.6651 9.09336C22.5639 9.42261 22.3798 9.69895 22.1454 9.93844C21.9022 10.187 21.6156 10.3055 21.3785 10.3706C21.185 10.4237 20.9765 10.4524 20.8252 10.4731C20.8025 10.4763 20.781 10.4792 20.7611 10.482C20.3783 10.5364 20.3116 10.5851 20.2747 10.6314C20.2769 10.6286 20.2763 10.6295 20.2724 10.6351C20.2652 10.6454 20.2473 10.6714 20.2156 10.7197C20.1734 10.7841 20.1189 10.8696 20.0558 10.9706C19.9297 11.1723 19.7746 11.4275 19.6241 11.6833C19.4727 11.9404 19.3303 12.191 19.2275 12.3858C19.2046 12.4292 19.1847 12.4678 19.1677 12.5017C19.2092 12.6189 19.2702 12.7737 19.346 12.9582C19.4225 13.1443 19.5097 13.3502 19.6006 13.5648L19.6028 13.5698C19.6849 13.7637 19.7699 13.9641 19.8497 14.1568C19.8536 14.1551 19.8577 14.1534 19.862 14.1516C19.9381 14.1197 20.0621 14.0677 20.1791 14.0315C20.3353 13.983 20.5536 13.9359 20.8047 13.9684C21.3027 14.0327 21.7622 14.2232 22.1159 14.5793C22.4691 14.9348 22.6565 15.3949 22.7201 15.8903C22.8545 16.9369 22.0268 17.9835 20.5985 18.1804C20.0077 18.2619 19.5359 18.2737 19.0816 18.1319C18.6749 18.0049 18.3374 17.7664 18.0077 17.5334C17.9882 17.5196 17.9688 17.5058 17.9493 17.4921C17.3758 17.0877 16.9667 16.4773 16.7011 16.069C16.6903 16.0525 16.6798 16.0363 16.6697 16.0206C16.6256 16.0878 16.5783 16.1613 16.5281 16.2393C16.3059 16.5843 16.0285 17.0152 15.7407 17.3598C15.3689 17.8051 14.771 18.213 14.1003 18.4037C13.4136 18.599 12.5751 18.5828 11.8358 18.0433C11.5113 17.8065 11.2961 17.5027 11.1831 17.1521C11.0759 16.8195 11.073 16.4834 11.1004 16.1879C11.1425 15.7322 11.3047 15.334 11.5807 15.005C11.8489 14.6853 12.1937 14.4672 12.5501 14.3104C12.7671 14.2149 12.9791 14.1892 13.1324 14.18C13.228 14.1742 13.3561 14.174 13.4393 14.1738C13.4688 14.1737 13.4926 14.1737 13.5073 14.1734C13.5187 14.1732 13.5291 14.1729 13.5387 14.1725C13.9779 13.5365 14.3481 12.9752 14.6233 12.5389C14.7691 12.3078 14.8863 12.1149 14.9722 11.9664C15.0112 11.899 15.0424 11.8431 15.0662 11.7986C15.0577 11.7639 15.044 11.7168 15.0231 11.655C14.9894 11.5558 14.9459 11.4444 14.8938 11.3137C14.8862 11.2948 14.8785 11.2754 14.8706 11.2557C14.8277 11.1486 14.7803 11.0302 14.737 10.9137H11.7618C11.7474 10.9488 11.7318 10.988 11.7152 11.0316C11.5828 11.3774 11.4234 11.8825 11.2472 12.4925C10.9615 13.4811 10.6471 14.6896 10.3499 15.8322C10.2816 16.0949 10.2141 16.3541 10.1482 16.6063C9.44781 19.2846 7.21366 22.1912 3.24942 22.1912C1.89282 22.1912 1.1702 20.8807 1.25777 19.8165C1.3361 18.8646 2.01985 17.804 3.24942 17.804H5.06861C5.07335 17.8015 5.07914 17.7983 5.08576 17.7943C5.13555 17.7641 5.20417 17.7093 5.27981 17.6295C5.3539 17.5513 5.42014 17.4644 5.4696 17.3847C5.51822 17.3063 5.53448 17.2611 5.53671 17.2548C5.53695 17.2542 5.53677 17.2546 5.53671 17.2548C5.89962 15.8145 6.25005 14.5084 6.55455 13.3733C6.81183 12.4142 7.0365 11.5766 7.20871 10.8819C7.10249 10.8926 6.99232 10.903 6.88608 10.9108C6.66681 10.9269 6.40517 10.9375 6.16993 10.9077C5.68163 10.8458 5.22712 10.6333 4.90287 10.2591C4.57473 9.88047 4.42865 9.3916 4.46623 8.8764C4.50391 8.35994 4.7515 7.91064 5.04668 7.59594C5.32451 7.29975 5.75967 7.00502 6.26424 7.00502H8.03236C8.05217 6.94407 8.07558 6.87077 8.10162 6.7829C8.11201 6.74783 8.12291 6.71043 8.13439 6.67105C8.24654 6.28634 8.41374 5.7128 8.69687 5.27446ZM7.94515 10.8218C7.94494 10.8219 7.94083 10.8217 7.93346 10.8208C7.94167 10.8212 7.94535 10.8216 7.94515 10.8218Z',
	],
	'link': [
		'M16.2 6C16.2 5.44772 16.6477 5 17.2 5C17.8367 5 18.4624 5.12794 19.0714 5.37152C19.7341 5.63661 20.2442 6.03001 20.7071 6.49289C21.17 6.95578 21.5634 7.4659 21.8285 8.12861C22.0721 8.73756 22.2 9.36326 22.2 10C22.2 10.6367 22.0721 11.2624 21.8285 11.8714C21.5667 12.5258 21.1798 13.0314 20.7245 13.4897L19.7399 14.5727C19.7293 14.5844 19.7183 14.5959 19.7071 14.6071L16.5071 17.8071C16.0442 18.27 15.5341 18.6634 14.8714 18.9285C14.2624 19.1721 13.6367 19.3 13 19.3C12.3633 19.3 11.7376 19.1721 11.1286 18.9285C10.4659 18.6634 9.95578 18.27 9.49289 17.8071C9.03 17.3442 8.63661 16.8341 8.37152 16.1714C8.12326 15.5507 8 14.9244 8 14.2C8 13.5633 8.12794 12.9376 8.37152 12.3286C8.63661 11.6659 9.03 11.1558 9.49289 10.6929L10.5929 9.59289C10.9834 9.20237 11.6166 9.20237 12.0071 9.59289C12.3976 9.98342 12.3976 10.6166 12.0071 11.0071L10.9071 12.1071C10.57 12.4442 10.3634 12.7341 10.2285 13.0714C10.0721 13.4624 10 13.8367 10 14.2C10 14.6756 10.0767 15.0493 10.2285 15.4286C10.3634 15.7659 10.57 16.0558 10.9071 16.3929C11.2442 16.73 11.5341 16.9366 11.8714 17.0715C12.2624 17.2279 12.6367 17.3 13 17.3C13.3633 17.3 13.7376 17.2279 14.1286 17.0715C14.4659 16.9366 14.7558 16.73 15.0929 16.3929L18.2761 13.2097L19.2601 12.1273C19.2707 12.1156 19.2817 12.1041 19.2929 12.0929C19.63 11.7558 19.8366 11.4659 19.9715 11.1286C20.1279 10.7376 20.2 10.3633 20.2 10C20.2 9.63674 20.1279 9.26244 19.9715 8.87139C19.8366 8.5341 19.63 8.24422 19.2929 7.90711C18.9558 7.56999 18.6659 7.36339 18.3286 7.22848C17.9376 7.07206 17.5633 7 17.2 7C16.6477 7 16.2 6.55228 16.2 6ZM11.3 7.5C10.9367 7.5 10.5624 7.57206 10.1714 7.72848C9.8341 7.86339 9.54422 8.07 9.20711 8.40711L5.92393 11.6903L4.93994 12.7727C4.92927 12.7844 4.91832 12.7959 4.90711 12.8071C4.56999 13.1442 4.36339 13.4341 4.22848 13.7714C4.07206 14.1624 4 14.5367 4 14.9C4 15.2633 4.07206 15.6376 4.22848 16.0286C4.36339 16.3659 4.57 16.6558 4.90711 16.9929C5.24422 17.33 5.5341 17.5366 5.87139 17.6715C6.26244 17.8279 6.63674 17.9 7 17.9C7.55228 17.9 8 18.3477 8 18.9C8 19.4523 7.55228 19.9 7 19.9C6.36326 19.9 5.73756 19.7721 5.12861 19.5285C4.4659 19.2634 3.95578 18.87 3.49289 18.4071C3.03 17.9442 2.63661 17.4341 2.37152 16.7714C2.12794 16.1624 2 15.5367 2 14.9C2 14.2633 2.12794 13.6376 2.37152 13.0286C2.63328 12.3742 3.02016 11.8686 3.47551 11.4103L4.46006 10.3273C4.47073 10.3156 4.48168 10.3041 4.49289 10.2929L7.79289 6.99289C8.25578 6.53 8.7659 6.13661 9.42861 5.87152C10.0376 5.62794 10.6633 5.5 11.3 5.5C11.9367 5.5 12.5624 5.62794 13.1714 5.87152C13.8341 6.13661 14.3442 6.53 14.8071 6.99289C15.27 7.45578 15.6634 7.9659 15.9285 8.62861C16.1721 9.23756 16.3 9.86326 16.3 10.5C16.3 11.1367 16.1721 11.7624 15.9285 12.3714C15.6664 13.0265 15.279 13.5325 14.823 13.9912L13.7372 15.1757C13.364 15.5828 12.7314 15.6103 12.3243 15.2372C11.9172 14.864 11.8897 14.2314 12.2628 13.8243L13.3628 12.6243C13.3726 12.6136 13.3827 12.6031 13.3929 12.5929C13.73 12.2558 13.9366 11.9659 14.0715 11.6286C14.2279 11.2376 14.3 10.8633 14.3 10.5C14.3 10.1367 14.2279 9.76244 14.0715 9.37139C13.9366 9.0341 13.73 8.74422 13.3929 8.40711C13.0558 8.07 12.7659 7.86339 12.4286 7.72848C12.0376 7.57206 11.6633 7.5 11.3 7.5Z',
	],
	'twitter': [
		'M8.66079 19.3087C15.4536 19.3087 19.1683 13.6855 19.1683 8.80933C19.1683 8.64961 19.165 8.49062 19.1579 8.33234C19.8789 7.81147 20.5057 7.16146 21 6.42151C20.3383 6.7154 19.6262 6.91324 18.8792 7.00245C19.6417 6.54561 20.227 5.82294 20.5032 4.96143C19.7897 5.3841 18.9995 5.6913 18.1582 5.85716C17.4842 5.1399 16.5248 4.69128 15.4625 4.69128C13.4231 4.69128 11.7693 6.34386 11.7693 8.3809C11.7693 8.67047 11.8017 8.95213 11.865 9.2223C8.79571 9.06798 6.07406 7.5996 4.25259 5.36684C3.93543 5.91217 3.75255 6.54563 3.75255 7.22154C3.75255 8.50179 4.40453 9.63199 5.39596 10.2932C4.79007 10.2745 4.22091 10.1083 3.72344 9.83166C3.72289 9.84714 3.72289 9.86224 3.72289 9.87878C3.72289 11.6659 4.99586 13.158 6.68566 13.4961C6.37534 13.5806 6.04885 13.6259 5.71186 13.6259C5.47427 13.6259 5.24278 13.6026 5.01778 13.5594C5.48794 15.0256 6.85128 16.0926 8.46763 16.1224C7.20367 17.1123 5.61142 17.7019 3.8809 17.7019C3.58318 17.7019 3.28907 17.685 3 17.6508C4.63441 18.6976 6.57513 19.3084 8.66098 19.3084',
	],
	'youtube': [
		'M19.9963 10.3409C20.0323 9.30058 19.8047 8.26804 19.3349 7.33916C19.0161 6.95802 18.5737 6.7008 18.0848 6.61234C16.0625 6.42884 14.0317 6.35363 12.0014 6.38703C9.97838 6.35211 7.95498 6.4249 5.93973 6.60508C5.54131 6.67755 5.17259 6.86443 4.87858 7.14292C4.22445 7.74617 4.15177 8.77825 4.07909 9.65043C3.97364 11.2186 3.97364 12.792 4.07909 14.3602C4.10012 14.8511 4.17321 15.3383 4.29713 15.8138C4.38477 16.1809 4.56207 16.5205 4.81317 16.8023C5.10918 17.0955 5.48648 17.293 5.89612 17.3692C7.46307 17.5626 9.04193 17.6428 10.6204 17.609C13.1643 17.6454 15.3956 17.609 18.0339 17.4055C18.4536 17.334 18.8415 17.1363 19.1459 16.8386C19.3494 16.635 19.5014 16.3859 19.5893 16.1118C19.8492 15.3142 19.9769 14.4795 19.9672 13.6406C19.9963 13.2336 19.9963 10.777 19.9963 10.3409ZM10.3588 14.0767V9.57774L14.6615 11.8381C13.455 12.5068 11.8633 13.2627 10.3588 14.0767Z',
	],
	'linkedin': [
		'M17.2807 17.2288H15.0582V13.7825C15.0582 12.9607 15.0434 11.9028 13.9022 11.9028C12.7447 11.9028 12.5676 12.7982 12.5676 13.7227V17.2286H10.345V10.1416H12.4786V11.1101H12.5085C12.722 10.7486 13.0306 10.4512 13.4013 10.2496C13.772 10.048 14.191 9.94977 14.6137 9.96531C16.8663 9.96531 17.2816 11.4324 17.2816 13.341L17.2807 17.2288ZM7.83727 9.17285C7.58218 9.17289 7.33279 9.09804 7.12067 8.95775C6.90854 8.81746 6.74321 8.61804 6.64554 8.38471C6.54788 8.15137 6.52229 7.8946 6.57201 7.64687C6.62173 7.39913 6.74453 7.17156 6.92488 6.99293C7.10522 6.8143 7.33501 6.69263 7.58519 6.64331C7.83537 6.59399 8.0947 6.61923 8.33039 6.71585C8.56608 6.81246 8.76754 6.97611 8.9093 7.1861C9.05106 7.39609 9.12675 7.64298 9.1268 7.89556C9.12683 8.06326 9.09349 8.22933 9.02871 8.38428C8.96392 8.53924 8.86895 8.68004 8.74921 8.79864C8.62946 8.91725 8.48729 9.01134 8.33082 9.07555C8.17435 9.13975 8.00664 9.17282 7.83727 9.17285ZM8.94853 17.2288H6.72369V10.1416H8.94853V17.2288ZM18.3887 4.57511H5.60687C5.31676 4.57187 5.0372 4.6828 4.82965 4.88353C4.6221 5.08427 4.50354 5.35838 4.5 5.64563V18.3541C4.50342 18.6415 4.62191 18.9158 4.82945 19.1167C5.03699 19.3177 5.31661 19.4288 5.60687 19.4258H18.3887C18.6796 19.4294 18.96 19.3186 19.1683 19.1176C19.3767 18.9167 19.496 18.6421 19.5 18.3541V5.64471C19.4959 5.35689 19.3765 5.08247 19.1681 4.88174C18.9597 4.68101 18.6794 4.5704 18.3887 4.57419',
	],
	'behance': [
		'M19.2498 6.89586H14.6905V8.16383H19.2678L19.2498 6.89586ZM18.2876 15.6188C17.9417 15.8479 17.5332 15.9642 17.1185 15.9515C16.844 15.9801 16.5665 15.9518 16.3035 15.8682C16.0404 15.7846 15.7974 15.6477 15.5898 15.4659C15.2058 15.0305 15.0059 14.4631 15.0322 13.8832H20.9854C21.0283 13.2794 20.9767 12.6725 20.8325 12.0846C20.693 11.5253 20.4489 10.9974 20.1131 10.5289C19.7751 10.0744 19.3385 9.7024 18.8361 9.44079C18.2772 9.1652 17.6607 9.0265 17.0376 9.03612C16.4515 9.03183 15.8706 9.14496 15.329 9.36885C14.833 9.57792 14.3836 9.88362 14.007 10.2681C13.6315 10.6603 13.3407 11.1256 13.1527 11.635C12.951 12.185 12.8505 12.7669 12.856 13.3526C12.8467 13.9467 12.9442 14.5376 13.1437 15.0972C13.3132 15.604 13.5823 16.0717 13.9351 16.4731C14.3001 16.8671 14.7487 17.1744 15.248 17.3723C15.8048 17.5845 16.3969 17.6882 16.9926 17.6781C17.8284 17.7041 18.6536 17.4853 19.3667 17.0486C20.0869 16.5368 20.6055 15.7892 20.8325 14.9353H18.8451C18.7387 15.2178 18.5429 15.4578 18.2876 15.6188ZM15.2031 11.9138C15.2731 11.6896 15.3892 11.4825 15.5441 11.306C15.699 11.1294 15.8892 10.9872 16.1023 10.8886C16.3847 10.7615 16.6921 10.7 17.0016 10.7088C17.2252 10.6897 17.4502 10.7192 17.6613 10.7952C17.8724 10.8713 18.0646 10.9921 18.2246 11.1494C18.5302 11.5234 18.7262 11.9747 18.7911 12.4533H15.0592C15.0737 12.2706 15.1069 12.0898 15.1581 11.9138H15.2031ZM10.4459 11.4821C10.9036 11.2915 11.3013 10.9808 11.597 10.5829C11.8688 10.1602 12.0038 9.66411 11.9837 9.16202C12.0013 8.70415 11.912 8.24846 11.7229 7.8311C11.564 7.46952 11.309 7.15847 10.9855 6.93183C10.6426 6.6962 10.2531 6.53675 9.84343 6.46421C9.35856 6.36252 8.86401 6.31427 8.36863 6.32033H3V17.6331H8.48554C8.98615 17.6335 9.48477 17.57 9.96933 17.4443C10.4286 17.3255 10.8638 17.1277 11.2553 16.8598C11.6345 16.5969 11.9434 16.2449 12.1545 15.8346C12.3883 15.3758 12.5027 14.8655 12.4873 14.3508C12.5043 13.713 12.3254 13.0853 11.9747 12.5523C11.5975 12.0162 11.0381 11.6358 10.401 11.4821H10.4459ZM5.49097 8.25376H7.82008C8.03405 8.25349 8.24766 8.27155 8.45856 8.30771C8.65275 8.33649 8.83925 8.40375 9.00711 8.50555C9.16929 8.59729 9.3007 8.73496 9.3848 8.90123C9.48896 9.10061 9.53859 9.32397 9.52869 9.5487C9.54544 9.74226 9.51584 9.93702 9.44234 10.1169C9.36884 10.2967 9.25356 10.4564 9.10603 10.5829C8.7842 10.8041 8.3991 10.9146 8.00892 10.8976H5.49097V8.25376ZM9.84343 14.9443C9.75104 15.1276 9.61132 15.2828 9.43876 15.3939C9.25918 15.5056 9.06131 15.5848 8.85424 15.6278C8.62407 15.6793 8.38863 15.7034 8.15281 15.6997H5.455V12.5972H8.15281C8.61576 12.577 9.07295 12.7062 9.45675 12.9659C9.63014 13.1215 9.76445 13.3158 9.84881 13.5329C9.93318 13.7501 9.96522 13.9841 9.94235 14.2159C9.96666 14.4631 9.93279 14.7126 9.84343 14.9443Z',
	],
	'dribbble': [
		'M12 3.08533C7.08414 3.08533 3.0853 7.08417 3.0853 12C3.0853 16.9159 7.08414 20.9147 12 20.9147C16.9158 20.9147 20.9147 16.9159 20.9147 12C20.9147 7.08417 16.9158 3.08533 12 3.08533ZM12 4.57111C13.8833 4.57111 15.5897 5.27918 16.8984 6.42834C16.7591 6.62277 16.5705 6.85782 16.2716 7.14801C15.6361 7.76322 14.6204 8.50321 13.0679 9.07489C12.0174 7.13351 10.9872 5.67384 10.3053 4.75683C10.8479 4.63205 11.4167 4.57111 12 4.57111ZM8.84271 5.26757C9.45211 6.0656 10.5374 7.54558 11.6285 9.51598C8.60765 10.3169 5.83632 10.4185 4.73359 10.4214C5.22691 8.12596 6.77074 6.23681 8.84271 5.26757ZM17.9199 7.51946C18.8253 8.71795 19.3883 10.2008 19.4289 11.8143C18.7673 11.6663 17.7922 11.5212 16.527 11.5125C15.8683 11.5096 15.1225 11.556 14.3215 11.6518C14.1358 11.2281 13.9356 10.8189 13.7411 10.4214C15.4068 9.78296 16.5415 8.9414 17.2931 8.21592C17.5485 7.96636 17.7487 7.7371 17.9199 7.51946ZM12.3018 10.8625C12.473 11.2078 12.6471 11.5618 12.8125 11.9304C9.63783 12.8097 7.35692 15.5026 6.38188 16.852C5.25883 15.552 4.57108 13.8573 4.57108 12C4.57108 11.9681 4.57108 11.9391 4.57108 11.9072C5.57514 11.9188 8.76726 11.8491 12.3018 10.8625ZM16.527 12.9751C17.8532 12.9751 18.7702 13.1608 19.3128 13.3001C18.9675 15.2792 17.8503 16.9768 16.2716 18.0824C15.9756 16.3065 15.4881 14.6176 14.9019 13.0679C15.4881 13.0099 16.0424 12.9751 16.527 12.9751ZM13.3929 13.3233C14.0604 15.018 14.6204 16.8782 14.9019 18.8486C14.0139 19.2229 13.0273 19.4289 12 19.4289C10.2966 19.4289 8.72373 18.8573 7.473 17.8967C8.2362 16.852 10.4794 14.072 13.3929 13.3233Z',
	],
	'code-sandbox': [
		'M 3.80029,16.2325 V 7.64965 c 0,-0.3375 0.17658,-0.6555 0.46854,-0.823 L 11.4141,2.7704 c 0.154,-0.08188 0.41,-0.11757 0.5857,-0.11757 0.1758,0 0.4468,0.04368 0.5857,0.11758 l 7.0867,4.05624 c 0.1402,0.0832 0.311,0.24749 0.3903,0.38429 l -7.8264,4.47746 c -0.2085,0.118856 -0.2363,0.2603 -0.2363,0.4291 v 9.2295 c -0.1604,0 -0.3245,-0.035 -0.4685,-0.1176 L 4.3274,17.0556 C 4.03543,16.8881 3.80029,16.5701 3.80029,16.2325 Z M 4.85452,9.35445 v 3.35095 c 0,0.2351 0.05857,0.3527 0.29284,0.4703 l 2.45983,1.4108 c 0.2343,0.1176 0.2929,0.294 0.2929,0.4703 v 2.3515 c 0,0.2351 0.0585,0.3527 0.2928,0.4703 l 2.45991,1.4109 c 0.2342,0.1176 0.4099,0.0588 0.4099,-0.1764 V 12.823 c 0,-0.1764 -0.0585,-0.3528 -0.2928,-0.4703 L 5.26449,9.17815 C 5.08879,9.06055 4.85452,9.11935 4.85452,9.35445 Z M 14.4597,5.35701 12.2926,6.59155 c -0.1756,0.1175 -0.4099,0.1175 -0.5856,0 L 9.53999,5.35701 c -0.1427,-0.08093 -0.3257,-0.08051 -0.4686,0 l -2.6941,1.52844 c -0.2343,0.1176 -0.2343,0.3527 0,0.4703 l 5.38821,3.11575 c 0.1442,0.0828 0.3244,0.0828 0.4686,0 l 5.3882,-3.11575 c 0.1758,-0.1176 0.2344,-0.3527 0,-0.4703 L 14.9282,5.35701 c -0.1429,-0.08051 -0.3259,-0.08093 -0.4685,0 z M 12,12.0967 v 9.2505 c 0.1605,0 0.2659,-0.0349 0.41,-0.1175 l 7.3796,-4.2326 c 0.2913,-0.1676 0.4101,-0.4272 0.4101,-0.7643 V 7.65003 c 0,-0.1691 -0.0554,-0.29789 -0.1372,-0.43909 L 12.2361,11.6884 C 12.0901,11.7721 12,11.875 12,12.0967 Z m 4.0997,5.3119 c 0,0.2351 -0.0877,0.3527 -0.2928,0.4703 l -2.4598,1.4108 c -0.1757,0.1175 -0.41,0.0588 -0.41,-0.1764 v -6.2901 c 0,-0.1683 0.1475,-0.3864 0.2928,-0.4703 l 5.6226,-3.23327 c 0.1562,-0.0902 0.2928,0.0543 0.2928,0.2352 v 3.35087 c 0,0.1736 -0.0816,0.3297 -0.2343,0.4115 l -2.5184,1.352 c -0.1527,0.0818 -0.2929,0.2378 -0.2929,0.4115 z',
	],
	'codepen': [
		'M20.9864 9.62389C20.9823 9.60207 20.9787 9.58026 20.9729 9.55893C20.9692 9.54608 20.9649 9.53396 20.9607 9.52136C20.9547 9.50245 20.9484 9.48354 20.9409 9.46512C20.9355 9.45227 20.9295 9.43991 20.9236 9.42755C20.9154 9.4101 20.9069 9.39288 20.8972 9.37616C20.8904 9.3638 20.8827 9.35216 20.8752 9.34028C20.8647 9.32429 20.8541 9.30853 20.8424 9.29326C20.834 9.28187 20.8252 9.27096 20.816 9.26005C20.8039 9.24551 20.7908 9.23169 20.7777 9.21812C20.7675 9.20793 20.7574 9.19775 20.7467 9.18782C20.7326 9.17497 20.7181 9.16285 20.7028 9.15121C20.6912 9.14224 20.6798 9.13303 20.6677 9.12479C20.6633 9.12164 20.6594 9.118 20.6548 9.1151L12.4288 3.6306C12.1692 3.45728 11.8306 3.45728 11.571 3.6306L3.34445 9.11485C3.33984 9.11776 3.33621 9.1214 3.3316 9.12455C3.31948 9.13303 3.30809 9.142 3.29645 9.15097C3.28142 9.16285 3.26664 9.17497 3.25258 9.18733C3.24191 9.19703 3.23173 9.20721 3.22179 9.21763C3.20822 9.2312 3.19562 9.24502 3.18325 9.25957C3.17404 9.27047 3.16532 9.28138 3.15683 9.2935C3.1452 9.30877 3.13453 9.32429 3.12411 9.34053C3.11659 9.3524 3.10908 9.36404 3.10205 9.3764C3.09235 9.39313 3.08387 9.41034 3.07587 9.42731C3.07005 9.43967 3.06375 9.45227 3.05866 9.46488C3.05115 9.4833 3.0446 9.50221 3.03854 9.52111C3.03442 9.53372 3.03006 9.54608 3.02666 9.55747C3.02109 9.5788 3.01697 9.60038 3.01309 9.62244C3.01091 9.63359 3.00824 9.64449 3.00679 9.65589C3.00242 9.68934 3 9.72279 3 9.75697V15.2424C3 15.2764 3.00242 15.3103 3.00727 15.3435C3.00897 15.3556 3.01212 15.3653 3.01454 15.377C3.01842 15.3988 3.02182 15.4206 3.02909 15.4424C3.03248 15.4545 3.03636 15.4667 3.04121 15.48C3.04727 15.4994 3.05333 15.5188 3.0606 15.5365C3.06569 15.5486 3.07272 15.5607 3.07757 15.5728C3.08557 15.5898 3.09454 15.6068 3.10423 15.6245C3.11102 15.6366 3.11878 15.6487 3.12605 15.6598C3.13647 15.6768 3.14786 15.6914 3.15998 15.7059C3.16847 15.718 3.17695 15.7277 3.18665 15.7394C3.19901 15.7539 3.21089 15.7684 3.22543 15.7813C3.23537 15.791 3.24482 15.8031 3.25694 15.8104C3.271 15.8225 3.28603 15.8346 3.30057 15.8472C3.31221 15.8569 3.32481 15.8642 3.33451 15.8736C3.33911 15.8761 3.34178 15.8809 3.34663 15.8831L11.571 21.3703C11.7009 21.4575 11.8497 21.5012 12 21.5004C12.1503 21.4997 12.2991 21.4568 12.429 21.3703L20.6556 15.886C20.6602 15.8831 20.664 15.8797 20.6684 15.8765C20.6805 15.8681 20.6919 15.8591 20.7035 15.8501C20.7186 15.8383 20.7334 15.8259 20.7474 15.8133C20.7581 15.8038 20.7683 15.7934 20.7784 15.7832C20.7918 15.7697 20.8046 15.7558 20.8167 15.7413C20.826 15.7304 20.8347 15.7195 20.8432 15.7078C20.8548 15.6926 20.8655 15.6768 20.8759 15.6608C20.8834 15.6492 20.8909 15.6373 20.898 15.6254C20.9076 15.6085 20.9161 15.5912 20.9244 15.5738C20.9302 15.5614 20.9363 15.5491 20.9416 15.5365C20.9491 15.5178 20.9554 15.4989 20.9615 15.48C20.9656 15.4674 20.9699 15.455 20.9736 15.4424C20.9792 15.4211 20.983 15.3993 20.9872 15.3775C20.9891 15.3663 20.992 15.3554 20.9932 15.344C20.9976 15.3105 21 15.2771 21 15.2429V9.75842C21 9.72424 20.9973 9.69079 20.9932 9.65734C20.9913 9.64546 20.9876 9.63577 20.9852 9.62389H20.9864ZM11.9998 14.3303L9.26429 12.5007L11.9998 10.6708L14.7355 12.5007L11.9998 14.3303ZM11.2265 9.32719L7.87317 11.5701L5.16631 9.75939L11.2265 5.71934V9.32719ZM6.48205 12.5004L4.54723 13.7946V11.2063L6.48205 12.5004ZM7.87317 13.4317L11.2265 15.6744V19.2822L5.16631 15.2417L7.87317 13.4312V13.4317ZM12.7732 15.6739L16.1266 13.4312L18.8337 15.2417L12.7732 19.2818V15.6739ZM17.5177 12.5009L19.4528 11.2065V13.7951L17.5177 12.5004V12.5009ZM16.1266 11.5701L12.7732 9.32744V5.71934L18.8337 9.75939L16.1266 11.5701Z',
	],
	'medium': [
		'M21.9932 12C21.9932 14.6436 21.5495 16.7867 21.0019 16.7867C20.4545 16.7867 20.0109 14.6436 20.0109 12C20.0109 9.35647 20.4545 7.21346 21.0019 7.21346C21.5495 7.21346 21.9932 9.35647 21.9932 12ZM19.4638 12C19.4638 14.9506 18.2021 17.3424 16.6456 17.3424C15.089 17.3424 13.8272 14.9506 13.8272 12C13.8272 9.04949 15.089 6.65763 16.6456 6.65763C18.2021 6.65763 19.4638 9.04949 19.4638 12ZM13.2802 12C13.2802 15.1345 10.7566 17.6754 7.64349 17.6754C4.53043 17.6754 2.00677 15.1345 2.00677 12C2.00677 8.8656 4.53043 6.32465 7.64349 6.32465C10.7566 6.32465 13.2802 8.8656 13.2802 12V12Z',
	],
	'email': [
		'M2 6C2 4.89543 2.89543 4 4 4H20C21.1046 4 22 4.89543 22 6V18C22 19.1046 21.1046 20 20 20H4C2.89543 20 2 19.1046 2 18V6ZM5.51859 6L12 11.6712L18.4814 6H5.51859ZM20 7.32877L12.6585 13.7526C12.2815 14.0825 11.7185 14.0825 11.3415 13.7526L4 7.32877V18H20V7.32877Z',
	],
};
export const IconNames = Object.keys(pathSpecifications);
const IconContainer = styled.span`
	display: grid;
	svg {
		${
			({ $size }) => `
				${deviceWidthQuery.only({ 'width': 's' })} {
					height: ${iconSize({
						'deviceWidth': 's',
						'size': $size,
					})}rem;
				}
				${deviceWidthQuery.only({ 'width': 'm' })} {
					height: ${iconSize({
						'deviceWidth': 'm',
						'size': $size,
					})}rem;
				}
				${deviceWidthQuery.only({ 'width': 'l' })} {
					height: ${iconSize({
						'deviceWidth': 'l',
						'size': $size,
					})}rem;
				}
			`
		}
		${
			({ $color }) => {
				if (typeof($color) === 'string') {
					return `fill: ${$color};`;
				}
				if (typeof($color) === 'object') {
					return `fill: ${color({
						'kind': $color.kind,
						'tone': $color.tone,
						'level': $color.level,
						'alpha': $color.alpha,
						'format': 'string'
					})};`;
				}
			}

		}
		overflow: hidden;
	}
`;

/**
 * SVG Icon
 */
export const Icon = ({
	content,
	size,
	color,
}) => {
	return (
		<IconContainer
			$color={color}
			$size={size}
		>
			<svg
				viewBox="0 0 24 24"
			>
				{
					pathSpecifications[content].map((svgPath, svgPathIndex) => (
						<path
							d={svgPath}
							key={`icon--${content}--${svgPathIndex}`}
						/>
					))
				}
			</svg>
		</IconContainer>
	);
};
Icon.propTypes = {
	/**
	 * Token indicating size of line and its container. To maintain alignment,
	 * a line always exists within a container whose height is a multiple of 8.
	 */
	'content': PropTypes.oneOf(Object.keys(pathSpecifications)),
	/**
	 * Token indicating size of type.
	 */
	'size': PropTypes.oneOf([
		'3xs', '2xs', '1xs', 's', 'm', 'l', '1xl', '2xl', '3xl', '4xl', '5xl',
	]).isRequired,
	/**
	 * [Learn about color props](/?path=/story/props-color--page).
	 */
	'color': PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.exact({
			'kind': PropTypes.string.isRequired,
			'tone': PropTypes.string.isRequired,
			'level': PropTypes.number.isRequired,
			'alpha': PropTypes.string,
		}),
	]),
};
Icon.defaultProps = {
	content: 'arrow-up',
	size: 's',
	color: {
		'kind': 'Accent',
		'tone': 'Sunshine',
		'level': 1,
	},
};

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
/* 	'twitter': [
		'XXXXX',
	],
	'youtube': [
		'XXXXX',
	],
	'linkedin': [
		'XXXXX',
	],
	'behance': [
		'XXXXX',
	],
	'dribbble': [
		'XXXXX',
	],
	'code-sandbox': [
		'XXXXX',
	],
	'codepen': [
		'XXXXX',
	],
	'medium': [
		'XXXXX',
	],
	'email': [
		'XXXXX',
	], */
};
const IconContainer = styled.span`
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
			({ $color }) => `fill: ${color({
				'kind': $color.kind,
				'tone': $color.tone,
				'level': $color.level,
				'alpha': $color.alpha,
				'format': 'string'
			})};`
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
					pathSpecifications[content].map((svgPath) => (
						<path
							d={svgPath}
							key={`icon--${content}`}
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
	 *
	 * @todo Update links in this description.
	 */
	'color': PropTypes.exact({
		'kind': PropTypes.string.isRequired,
		'tone': PropTypes.string.isRequired,
		'level': PropTypes.number.isRequired,
		'alpha': PropTypes.string,
	}),
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

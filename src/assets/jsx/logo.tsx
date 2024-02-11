import React from 'react';
import { ISVGProps } from './types';

export const Logo = (props: ISVGProps) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='144'
      height='32'
      viewBox='0 0 144 32'
      fill='none'
      {...props}>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M0.140137 1H4.16414C8.52867 1 12.3315 2.2068 15.1175 5.01465C17.9284 7.80363 19.1321 11.6197 19.1321 16C19.1321 18.7074 18.4682 21.2466 17.1257 23.5559C15.7987 25.8383 13.9761 27.6618 11.6945 28.9897C9.40101 30.3373 6.86892 31 4.16414 31H0.140137V1ZM12.9961 7.136C11.2991 5.42144 9.01374 4.40994 6.14014 4.10149C5.58848 4.04228 5.01515 4.00898 4.42014 4.00158C4.33524 4.00053 4.24991 4 4.16414 4H3.14014V28H4.16414C4.24976 28 4.33509 27.9992 4.42014 27.9976C5.00737 27.9864 5.58071 27.9366 6.14014 27.8482C7.57873 27.6208 8.9254 27.1381 10.1801 26.4C10.2071 26.3843 10.234 26.3686 10.2608 26.3527C10.2633 26.3512 10.2658 26.3497 10.2684 26.3482C12.0538 25.291 13.4706 23.8652 14.5188 22.0708C14.5205 22.068 14.5221 22.0652 14.5238 22.0624C14.5266 22.0576 14.5294 22.0528 14.5321 22.048C15.5988 20.2133 16.1321 18.1973 16.1321 16C16.1321 12.1698 15.0922 9.22049 13.0122 7.15194C13.0095 7.14928 13.0069 7.14662 13.0042 7.14396C13.0015 7.14131 12.9988 7.13865 12.9961 7.136ZM12.2921 7.84L12.2886 7.83631C10.981 6.46949 9.27282 5.58981 7.16414 5.19726C6.8327 5.13555 6.49137 5.08589 6.14014 5.04826C5.59099 4.98942 5.01766 4.96 4.42014 4.96H4.16414V27.008H4.42014C5.00882 27.008 5.58216 26.9648 6.14014 26.8785C6.48742 26.8247 6.82875 26.7542 7.16414 26.667C8.05755 26.4347 8.90876 26.0837 9.71776 25.614L9.72178 25.6116C9.7466 25.5972 9.77139 25.5827 9.79614 25.568C11.4175 24.5867 12.6975 23.2533 13.6361 21.568C13.642 21.5577 13.6478 21.5475 13.6536 21.5372C14.602 19.8601 15.0761 18.0143 15.0761 16C15.0761 12.4609 14.1493 9.74216 12.2957 7.84365L12.2921 7.84ZM7.16414 8.26569C8.47403 8.59711 9.42168 9.17846 10.1232 9.91257L10.1349 9.92489L10.1468 9.93708C11.2918 11.1083 12.0761 12.9732 12.0761 16C12.0761 17.5303 11.7199 18.8709 11.0294 20.0831L11.0222 20.0957L11.0152 20.1083C10.3279 21.3423 9.4164 22.2883 8.25528 22.9939C7.9038 23.2011 7.54073 23.3772 7.16414 23.5216V8.26569Z'
        fill='white'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M23.1527 23.7012L23.1431 23.6843C21.781 21.2743 21.0908 18.6649 21.0908 15.9041C21.0908 13.1501 21.7994 10.5576 23.1981 8.18003C24.5828 5.80485 26.4702 3.90126 28.8299 2.50929C31.2135 1.08162 33.8234 0.360107 36.6028 0.360107C39.3913 0.360107 42.0036 1.0647 44.3778 2.47853C46.7209 3.87388 48.5879 5.78166 49.9499 8.1588C51.3471 10.5381 52.0508 13.1383 52.0508 15.9041C52.0508 18.7225 51.3529 21.3721 49.9569 23.7971C48.5924 26.1833 46.7129 28.1014 44.3543 29.5166L44.3458 29.5217L44.3458 29.5217C41.9716 30.9355 39.3593 31.6401 36.5708 31.6401C33.7762 31.6401 31.1552 30.8998 28.7665 29.44C26.4228 28.0077 24.5439 26.0898 23.1625 23.718L23.1527 23.7012ZM47.3192 22.366C47.3311 22.3454 47.343 22.3248 47.3548 22.3041C48.475 20.3596 49.0403 18.2476 49.0507 15.9681C49.0508 15.9468 49.0508 15.9255 49.0508 15.9041C49.0508 13.6641 48.4855 11.5841 47.3548 9.66411C47.3502 9.65606 47.3456 9.64803 47.341 9.64C46.233 7.71005 44.7336 6.18209 42.8428 5.05611C42.8338 5.05077 42.8249 5.04543 42.8159 5.04012C42.8133 5.03861 42.8108 5.0371 42.8083 5.0356C40.9189 3.9186 38.8504 3.36011 36.6028 3.36011C34.3725 3.36011 32.3009 3.93112 30.3878 5.07314C30.3854 5.07459 30.383 5.07604 30.3805 5.07749C30.3746 5.08103 30.3687 5.08456 30.3628 5.08811C28.4612 6.20795 26.9467 7.7254 25.8194 9.64045C25.8179 9.64301 25.8164 9.64558 25.8149 9.64814C25.8055 9.6641 25.7961 9.68009 25.7868 9.69611C24.6562 11.6161 24.0908 13.6854 24.0908 15.9041C24.0908 15.9255 24.0909 15.9468 24.091 15.9681C24.1014 18.1841 24.6561 20.2641 25.7548 22.2081C25.78 22.2513 25.8054 22.2943 25.8309 22.3372C25.8333 22.3411 25.8356 22.345 25.8379 22.349C26.9599 24.2249 28.4575 25.7353 30.3308 26.8801C30.354 26.8943 30.3771 26.9083 30.4003 26.9223C30.4026 26.9237 30.405 26.9251 30.4073 26.9265C32.306 28.0689 34.3605 28.6401 36.5708 28.6401C38.8128 28.6401 40.8766 28.0844 42.7621 26.973C42.7646 26.9715 42.7671 26.97 42.7695 26.9686C42.7833 26.9605 42.7971 26.9523 42.8108 26.9441C44.7092 25.8051 46.2114 24.2802 47.3173 22.3694C47.3179 22.3683 47.3186 22.3672 47.3192 22.366ZM46.4268 21.8561C46.4387 21.8355 46.4506 21.8148 46.4623 21.7941C46.4629 21.7931 46.4635 21.792 46.4641 21.791C47.4846 19.9958 47.9948 18.0548 47.9948 15.9681C47.9948 15.9468 47.9948 15.9254 47.9947 15.9041C47.9844 13.8517 47.4792 11.9436 46.4791 10.1798C46.477 10.1759 46.4748 10.1721 46.4726 10.1682C46.468 10.1602 46.4634 10.1522 46.4588 10.1441C45.4418 8.36434 44.0671 6.95282 42.3346 5.90956C42.3227 5.90239 42.3108 5.89524 42.2988 5.88811C40.5495 4.82144 38.6508 4.28811 36.6028 4.28811C34.5335 4.28811 32.6242 4.82144 30.8748 5.88811C30.867 5.8928 30.8591 5.8975 30.8513 5.90221C30.8491 5.90355 30.8468 5.90489 30.8446 5.90622C29.1094 6.94981 27.7221 8.36244 26.6828 10.1441C26.6723 10.1626 26.6618 10.1811 26.6513 10.1996C26.6505 10.201 26.6497 10.2024 26.6489 10.2038C25.6579 11.9609 25.1572 13.861 25.147 15.9041C25.1469 15.9254 25.1468 15.9468 25.1468 15.9681C25.1468 18.025 25.6324 19.9402 26.6036 21.7137C26.6057 21.7175 26.6077 21.7212 26.6098 21.7249C26.6338 21.7687 26.6582 21.8125 26.6828 21.8561C27.7145 23.6247 29.089 25.04 30.8063 26.102C30.8291 26.1161 30.8519 26.1301 30.8748 26.1441C32.6242 27.1894 34.5228 27.7121 36.5708 27.7121C38.6188 27.7121 40.5175 27.1894 42.2668 26.1441C42.2824 26.1346 42.298 26.125 42.3136 26.1154C42.3145 26.1149 42.3154 26.1143 42.3163 26.1138C44.0423 25.0504 45.4125 23.6312 46.4268 21.8561ZM40.7164 23.5757C42.0243 22.7757 43.0498 21.7191 43.8221 20.3677L43.8277 20.3578L43.8278 20.3578C44.6079 19.0045 44.9948 17.5592 44.9948 15.9681C44.9948 14.3924 44.6156 12.9651 43.8541 11.6325C43.0826 10.2824 42.0606 9.24055 40.76 8.46335L40.7484 8.45648L40.737 8.4495C39.4579 7.66956 38.0996 7.28811 36.6028 7.28811C35.0787 7.28811 33.7106 7.6727 32.4366 8.4495L32.4252 8.45648L32.4137 8.46335C31.1112 9.24166 30.0748 10.2873 29.2809 11.6441C28.5239 12.9734 28.1468 14.397 28.1468 15.9681C28.1468 17.5637 28.5256 19.0113 29.2848 20.3627C30.079 21.7177 31.1176 22.7759 32.4251 23.5757C33.7036 24.337 35.0664 24.7121 36.5708 24.7121C38.0752 24.7121 39.4381 24.337 40.7164 23.5757Z'
        fill='white'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M70.2402 24.6789L62.7003 17.2241H72.6091L76.3723 20.94C76.6018 20.5942 76.811 20.2276 77.0002 19.8389L77.0071 19.8247L77.0142 19.8105C77.614 18.6109 77.9135 17.3429 77.9135 15.9681C77.9135 14.3924 77.5343 12.9651 76.7728 11.6325C76.0013 10.2824 74.9793 9.24055 73.6787 8.46335L73.6671 8.45648L73.6557 8.4495C72.3766 7.66956 71.0183 7.28811 69.5215 7.28811C67.9974 7.28811 66.6293 7.6727 65.3553 8.4495L65.3439 8.45648L65.3324 8.46335C64.0299 9.24165 62.9936 10.2873 62.1997 11.6441C61.4426 12.9734 61.0655 14.397 61.0655 15.9681C61.0655 17.5637 61.4443 19.0113 62.2035 20.3627C62.9977 21.7177 64.0363 22.7759 65.3439 23.5757C66.6223 24.337 67.9851 24.7121 69.4895 24.7121C69.7428 24.7121 69.993 24.7011 70.2402 24.6789ZM78.5372 23.0777C78.4581 23.1851 78.3774 23.291 78.2949 23.3954C78.1754 23.5468 78.0523 23.695 77.9257 23.84C77.9255 23.8403 77.9252 23.8406 77.925 23.8409C77.5057 24.3213 77.0475 24.7671 76.5505 25.1784C76.5223 25.2017 76.494 25.225 76.4655 25.2481L71.3775 20.2241H70.0015L75.6655 25.8241C75.0609 26.2249 74.4401 26.5619 73.803 26.8351C73.8008 26.836 73.7986 26.837 73.7964 26.8379C73.4682 26.9784 73.1357 27.102 72.7989 27.2086C71.7384 27.5443 70.6353 27.7121 69.4895 27.7121C67.4415 27.7121 65.5429 27.1894 63.7935 26.1441C63.7706 26.1301 63.7478 26.1161 63.725 26.102C62.0077 25.04 60.6332 23.6247 59.6015 21.8561C59.5769 21.8125 59.5525 21.7687 59.5285 21.7249C59.5264 21.7212 59.5244 21.7175 59.5223 21.7137C58.5511 19.9402 58.0655 18.025 58.0655 15.9681C58.0655 15.9468 58.0656 15.9254 58.0657 15.9041C58.0759 13.861 58.5766 11.9609 59.5676 10.2038C59.5684 10.2024 59.5692 10.201 59.57 10.1996C59.5805 10.1811 59.591 10.1626 59.6015 10.1441C60.6408 8.36244 62.0281 6.94981 63.7633 5.90622C63.7655 5.90489 63.7678 5.90355 63.77 5.90221C63.7778 5.8975 63.7857 5.8928 63.7935 5.88811C65.5429 4.82144 67.4522 4.28811 69.5215 4.28811C71.5695 4.28811 73.4682 4.82144 75.2175 5.88811C75.2295 5.89524 75.2414 5.90239 75.2533 5.90956C76.9858 6.95282 78.3605 8.36434 79.3775 10.1441C79.3821 10.1522 79.3867 10.1602 79.3913 10.1682C79.3935 10.1721 79.3957 10.1759 79.3978 10.1798C80.3979 11.9436 80.9031 13.8517 80.9134 15.9041C80.9135 15.9254 80.9135 15.9468 80.9135 15.9681C80.9135 17.7725 80.5215 19.4736 79.7374 21.0716C79.7242 21.0985 79.7109 21.1253 79.6975 21.1521C79.3626 21.8401 78.9758 22.4819 78.5372 23.0777ZM80.6503 21.6159C80.6486 21.6193 80.6469 21.6226 80.6453 21.626C80.2532 22.4153 79.7952 23.1475 79.2714 23.8226C79.0746 24.0762 78.8685 24.3218 78.6532 24.5593C78.6516 24.561 78.65 24.5627 78.6485 24.5644C78.1964 25.0624 77.7034 25.525 77.1695 25.9521L79.6335 28.3841H78.2255L76.3695 26.5281C76.3149 26.5653 76.2601 26.602 76.2052 26.6381C75.6652 26.9938 75.1102 27.3021 74.5401 27.5629C74.538 27.5639 74.5359 27.5649 74.5338 27.5658C72.9663 28.282 71.2849 28.6401 69.4895 28.6401C67.2792 28.6401 65.2247 28.0689 63.326 26.9265C63.3237 26.9251 63.3214 26.9237 63.319 26.9223C63.2958 26.9083 63.2727 26.8943 63.2495 26.8801C61.3762 25.7353 59.8786 24.2249 58.7566 22.349C58.7543 22.345 58.752 22.3411 58.7496 22.3372C58.7241 22.2943 58.6987 22.2513 58.6735 22.2081C57.5748 20.2641 57.0201 18.1841 57.0097 15.9681C57.0096 15.9468 57.0095 15.9255 57.0095 15.9041C57.0095 13.6854 57.5749 11.6161 58.7055 9.69611C58.7148 9.68009 58.7242 9.6641 58.7336 9.64814C58.7351 9.64558 58.7366 9.64301 58.7381 9.64045C59.8654 7.7254 61.3799 6.20795 63.2815 5.08811C63.2874 5.08456 63.2933 5.08103 63.2992 5.07749C63.3017 5.07604 63.3041 5.07459 63.3065 5.07314C65.2196 3.93112 67.2912 3.36011 69.5215 3.36011C71.7691 3.36011 73.8376 3.9186 75.7269 5.03559C75.7295 5.0371 75.732 5.03861 75.7346 5.04012C75.7436 5.04543 75.7525 5.05076 75.7615 5.05611C77.6523 6.18209 79.1517 7.71005 80.2597 9.64C80.2643 9.64803 80.2689 9.65606 80.2735 9.66411C81.4042 11.5841 81.9695 13.6641 81.9695 15.9041C81.9695 15.9255 81.9695 15.9468 81.9694 15.9681C81.9604 17.9494 81.5338 19.8054 80.6895 21.5361C80.6765 21.5628 80.6634 21.5894 80.6503 21.6159ZM82.8686 8.15876C84.2658 10.5381 84.9695 13.1383 84.9695 15.9041C84.9695 18.351 84.4452 20.6798 83.3858 22.8514C82.8417 23.9668 82.1871 24.9965 81.4238 25.9359L86.9436 31.3841H76.9829L75.8577 30.259C73.8772 31.1775 71.7445 31.6401 69.4895 31.6401C66.6949 31.6401 64.0739 30.8998 61.6852 29.44C59.3415 28.0077 57.4626 26.0898 56.0812 23.718L56.0714 23.7012L56.0618 23.6843C54.6997 21.2743 54.0095 18.6649 54.0095 15.9041C54.0095 13.1501 54.7181 10.5576 56.1168 8.18001C57.5015 5.80483 59.3889 3.90125 61.7486 2.50928C64.1322 1.08162 66.7421 0.360107 69.5215 0.360107C72.31 0.360107 74.9223 1.0647 77.2965 2.47853M82.8686 8.15876C81.5065 5.78164 79.6396 3.87388 77.2965 2.47853Z'
        fill='white'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M88.9023 1H103.51V7.928H95.9583V14.984H102.262V21.912H95.9583V24.072H103.51V31H88.9023V1ZM99.2623 18.912V17.984H92.9583V4.928H100.51V4H91.9023V28H100.51V27.072H92.9583V18.912H99.2623Z'
        fill='white'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M108.469 4V4.928H114.005V28H115.061V4.928H120.533V4H108.469ZM118.061 7.928H123.533V1H105.469V7.928H111.005V31H118.061V7.928Z'
        fill='white'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M128.492 4V4.928H134.028V28H135.084V4.928H140.556V4H128.492ZM138.084 7.928H143.556V1H125.492V7.928H131.028V31H138.084V7.928Z'
        fill='white'
      />
    </svg>
  );
};
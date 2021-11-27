const logoPath =
  "M 104.00,7.76                     C 109.99,6.77 111.99,10.02 116.00,14.00                       116.00,14.00 129.96,28.00 129.96,28.00                       132.70,30.93 135.45,33.74 133.64,38.00                       131.98,41.92 116.05,56.95 112.00,61.00                       112.00,61.00 62.00,111.00 62.00,111.00                       62.00,111.00 46.00,127.00 46.00,127.00                       43.68,129.31 40.09,133.20 37.00,134.24                       32.71,135.70 29.85,132.71 27.00,129.98                       27.00,129.98 11.02,114.00 11.02,114.00                       7.71,110.55 4.85,107.82 7.74,103.00                       9.60,99.90 25.28,84.72 29.00,81.00                       29.00,81.00 73.00,37.00 73.00,37.00                       79.46,30.54 97.34,11.17 104.00,7.76 Z                     M 185.00,7.82                     C 187.03,7.42 187.75,6.89 190.00,7.82                       193.82,8.86 204.55,20.55 208.00,24.00                       208.00,24.00 267.00,83.00 267.00,83.00                       267.00,83.00 282.96,99.00 282.96,99.00                       285.24,101.43 288.14,104.35 287.16,108.00                       286.41,110.75 282.98,113.99 281.00,116.00                       281.00,116.00 267.00,129.98 267.00,129.98                       264.59,132.29 261.69,135.39 258.00,134.34                       254.47,133.35 245.08,123.08 242.00,120.00                       242.00,120.00 206.00,84.00 206.00,84.00                       206.00,84.00 194.00,72.01 194.00,72.01                       192.52,70.59 190.20,68.04 188.00,68.04                       184.33,68.04 178.79,74.33 180.63,78.00                       181.75,80.24 196.09,94.04 199.00,97.00                       201.58,99.63 205.30,102.90 204.63,107.00                       203.93,111.30 193.42,120.58 190.00,124.00                       187.21,126.79 181.84,133.00 178.00,133.63                       173.90,134.30 170.63,130.58 168.00,128.00                       168.00,128.00 155.00,115.00 155.00,115.00                       153.46,113.46 150.02,109.73 148.00,109.20                       144.74,108.34 141.07,112.94 139.00,115.00                       139.00,115.00 124.00,129.94 124.00,129.94                       121.42,132.30 118.73,134.60 115.00,133.38                       112.19,132.47 109.09,129.07 107.00,127.00                       107.00,127.00 93.04,113.00 93.04,113.00                       91.06,110.88 88.32,108.20 88.96,105.00                       89.55,102.09 93.90,98.11 96.00,96.00                       96.00,96.00 113.00,79.00 113.00,79.00                       113.00,79.00 160.00,32.00 160.00,32.00                       165.75,26.25 179.20,11.87 185.00,7.82 Z";

export default function Logo() {
  return (
    <svg
      id="svg-logo"
      xmlns="http://www.w3.org/2000/svg"
      width="4.08333in"
      height="1.98611in"
      viewBox="0 0 294 143"
    >
      <path
        id="logo"
        fill="lightyellow"
        stroke="lightyellow"
        strokeWidth="4"
        d={logoPath}
      />
    </svg>
  );
}

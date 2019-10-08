# For the purpose of this app, I borrowed some sounds to an existing piano app
# that i found

base_url="http://www.multiplayerpiano.com/sounds/"
#piano_type="Steinway_Grand"
piano_type="Vintage_Upright"


mkdir $piano_type

curl  $base_url$piano_type/a-1.mp3  > $piano_type/a0.mp3 &
curl  $base_url$piano_type/as-1.mp3 > $piano_type/b0f.mp3 &
curl  $base_url$piano_type/b-1.mp3  > $piano_type/b0.mp3 &

curl  $base_url$piano_type/c0.mp3   > $piano_type/c1.mp3 &
curl  $base_url$piano_type/cs0.mp3  > $piano_type/d1f.mp3 &
curl  $base_url$piano_type/d0.mp3   > $piano_type/d1.mp3 &
curl  $base_url$piano_type/ds0.mp3  > $piano_type/e1f.mp3 &
curl  $base_url$piano_type/e0.mp3   > $piano_type/e1.mp3 &
curl  $base_url$piano_type/f0.mp3   > $piano_type/f1.mp3 &
curl  $base_url$piano_type/fs0.mp3  > $piano_type/g1f.mp3 &
curl  $base_url$piano_type/g0.mp3   > $piano_type/g1.mp3 &
curl  $base_url$piano_type/gs0.mp3  > $piano_type/a2f.mp3 &
curl  $base_url$piano_type/a0.mp3   > $piano_type/a2.mp3 &
curl  $base_url$piano_type/as0.mp3  > $piano_type/b2f.mp3 &
curl  $base_url$piano_type/b0.mp3   > $piano_type/b2.mp3 &

curl  $base_url$piano_type/c1.mp3   > $piano_type/c2.mp3 &
curl  $base_url$piano_type/cs1.mp3  > $piano_type/d2f.mp3 &
curl  $base_url$piano_type/d1.mp3   > $piano_type/d2.mp3 &
curl  $base_url$piano_type/ds1.mp3  > $piano_type/e2f.mp3 &
curl  $base_url$piano_type/e1.mp3   > $piano_type/e2.mp3 &
curl  $base_url$piano_type/f1.mp3   > $piano_type/f2.mp3 &
curl  $base_url$piano_type/fs1.mp3  > $piano_type/g2f.mp3 &
curl  $base_url$piano_type/g1.mp3   > $piano_type/g2.mp3 &
curl  $base_url$piano_type/gs1.mp3  > $piano_type/a3f.mp3 &
curl  $base_url$piano_type/a1.mp3   > $piano_type/a3.mp3 &
curl  $base_url$piano_type/as1.mp3  > $piano_type/b3f.mp3 &
curl  $base_url$piano_type/b1.mp3   > $piano_type/b3.mp3 &

curl  $base_url$piano_type/c2.mp3   > $piano_type/c3.mp3 &
curl  $base_url$piano_type/cs2.mp3  > $piano_type/d3f.mp3 &
curl  $base_url$piano_type/d2.mp3   > $piano_type/d3.mp3 &
curl  $base_url$piano_type/ds2.mp3  > $piano_type/e3f.mp3 &
curl  $base_url$piano_type/e2.mp3   > $piano_type/e3.mp3 &
curl  $base_url$piano_type/f2.mp3   > $piano_type/f3.mp3 &
curl  $base_url$piano_type/fs2.mp3  > $piano_type/g3f.mp3 &
curl  $base_url$piano_type/g2.mp3   > $piano_type/g3.mp3 &
curl  $base_url$piano_type/gs2.mp3  > $piano_type/a4f.mp3 &
curl  $base_url$piano_type/a2.mp3   > $piano_type/a4.mp3 &
curl  $base_url$piano_type/as2.mp3  > $piano_type/b4f.mp3 &
curl  $base_url$piano_type/b2.mp3   > $piano_type/b4.mp3 &

curl  $base_url$piano_type/c3.mp3   > $piano_type/c4.mp3 &
curl  $base_url$piano_type/cs3.mp3  > $piano_type/d4f.mp3 &
curl  $base_url$piano_type/d3.mp3   > $piano_type/d4.mp3 &
curl  $base_url$piano_type/ds3.mp3  > $piano_type/e4f.mp3 &
curl  $base_url$piano_type/e3.mp3   > $piano_type/e4.mp3 &
curl  $base_url$piano_type/f3.mp3   > $piano_type/f4.mp3 &
curl  $base_url$piano_type/fs3.mp3  > $piano_type/g4f.mp3 &
curl  $base_url$piano_type/g3.mp3   > $piano_type/g4.mp3 &
curl  $base_url$piano_type/gs3.mp3  > $piano_type/a5f.mp3 &
curl  $base_url$piano_type/a3.mp3   > $piano_type/a5.mp3 &
curl  $base_url$piano_type/as3.mp3  > $piano_type/b5f.mp3 &
curl  $base_url$piano_type/b3.mp3   > $piano_type/b5.mp3 &

curl  $base_url$piano_type/c4.mp3   > $piano_type/c5.mp3 &
curl  $base_url$piano_type/cs4.mp3  > $piano_type/d5f.mp3 &
curl  $base_url$piano_type/d4.mp3   > $piano_type/d5.mp3 &
curl  $base_url$piano_type/ds4.mp3  > $piano_type/e5f.mp3 &
curl  $base_url$piano_type/e4.mp3   > $piano_type/e5.mp3 &
curl  $base_url$piano_type/f4.mp3   > $piano_type/f5.mp3 &
curl  $base_url$piano_type/fs4.mp3  > $piano_type/g5f.mp3 &
curl  $base_url$piano_type/g4.mp3   > $piano_type/g5.mp3 &
curl  $base_url$piano_type/gs4.mp3  > $piano_type/a6f.mp3 &
curl  $base_url$piano_type/a4.mp3   > $piano_type/a6.mp3 &
curl  $base_url$piano_type/as4.mp3  > $piano_type/b6f.mp3 &
curl  $base_url$piano_type/b4.mp3   > $piano_type/b6.mp3 &

curl  $base_url$piano_type/c5.mp3   > $piano_type/c6.mp3 &
curl  $base_url$piano_type/cs5.mp3  > $piano_type/d6f.mp3 &
curl  $base_url$piano_type/d5.mp3   > $piano_type/d6.mp3 &
curl  $base_url$piano_type/ds5.mp3  > $piano_type/e6f.mp3 &
curl  $base_url$piano_type/e5.mp3   > $piano_type/e6.mp3 &
curl  $base_url$piano_type/f5.mp3   > $piano_type/f6.mp3 &
curl  $base_url$piano_type/fs5.mp3  > $piano_type/g6f.mp3 &
curl  $base_url$piano_type/g5.mp3   > $piano_type/g6.mp3 &
curl  $base_url$piano_type/gs5.mp3  > $piano_type/a7f.mp3 &
curl  $base_url$piano_type/a5.mp3   > $piano_type/a7.mp3 &
curl  $base_url$piano_type/as5.mp3  > $piano_type/b7f.mp3 &
curl  $base_url$piano_type/b5.mp3   > $piano_type/b7.mp3 &

curl  $base_url$piano_type/c6.mp3   > $piano_type/c7.mp3 &
curl  $base_url$piano_type/cs6.mp3  > $piano_type/d7f.mp3 &
curl  $base_url$piano_type/d6.mp3   > $piano_type/d7.mp3 &
curl  $base_url$piano_type/ds6.mp3  > $piano_type/e7f.mp3 &
curl  $base_url$piano_type/e6.mp3   > $piano_type/e7.mp3 &
curl  $base_url$piano_type/f6.mp3   > $piano_type/f7.mp3 &
curl  $base_url$piano_type/fs6.mp3  > $piano_type/g7f.mp3 &
curl  $base_url$piano_type/g6.mp3   > $piano_type/g7.mp3 &
curl  $base_url$piano_type/gs6.mp3  > $piano_type/a8f.mp3 &
curl  $base_url$piano_type/a6.mp3   > $piano_type/a8.mp3 &
curl  $base_url$piano_type/as6.mp3  > $piano_type/b8f.mp3 &
curl  $base_url$piano_type/b6.mp3   > $piano_type/b8.mp3 &

curl  $base_url$piano_type/c7.mp3   > $piano_type/c8.mp3 &

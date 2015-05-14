a = User.create(username: 'Alex Haas', email: 'alexhaas@email.com', password: 'password')
b = User.create(username: 'Example', email: 'example@email.com', password: 'password')
c = User.create(username: 'Steve Holt', email: 'holt@email.com', password: 'password')
d = User.create(username: 'Mike Bluth', email: 'mbluth@email.com', password: 'password')

a.songs.create(title: 'DMB - Crash', upload_id: '24rnfjfr')
a.songs.create(title: 'Josh Cocktail - Fire', upload_id: '24rnfjfr')
a.songs.create(title: 'The Neighbourhood - Sweater Weather', upload_id: '24rnfjfr')
a.songs.create(title: 'Luke Bryan - Crash My Party', upload_id: '24rnfjfr')
a.songs.create(title: 'The Deans List - Caveman', upload_id: '24rnfjfr')

b.songs.create(title: 'Jack Johnson - Holes to Heaven', upload_id: '24rnfjfr')
b.songs.create(title: 'Mike Posner - Wonderwall [cover]', upload_id: '24rnfjfr')
b.songs.create(title: 'KiD CuDi - CudderIsBack', upload_id: '24rnfjfr')

c.songs.create(title: 'The Fray - Over My Head', upload_id: '24rnfjfr')
c.songs.create(title: 'Nappy Roots - AwwNaw', upload_id: '24rnfjfr')
c.songs.create(title: 'Wolfgang Gartner - Space Junk', upload_id: '24rnfjfr')

d.songs.create(title: 'Daddys Groove - Hurricane', upload_id: '24rnfjfr')
d.songs.create(title: 'Nosaj Thing - Aquarium', upload_id: '24rnfjfr')
d.songs.create(title: 'Big Sean - Marvin & Chardonnay (feat. Kanye West)', upload_id: '24rnfjfr')

a.out_follows.create(followee_id: 2)
a.out_follows.create(followee_id: 4)
c.out_follows.create(followee_id: 1)
c.out_follows.create(followee_id: 2)
b.out_follows.create(followee_id: 4)

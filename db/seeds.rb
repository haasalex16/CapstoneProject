a = User.create(username: 'Alex Haas', email: 'alexhaas@email.com', password: 'password')
b = User.create(username: 'Guest', email: 'guest@email.com', password: 'password')
c = User.create(username: 'Steve Holt', email: 'holt@email.com', password: 'password')
d = User.create(username: 'Michael Bluth', email: 'mbluth@email.com', password: 'password')
e = User.create(username: 'George Michael Bluth', email: 'gmbluth@email.com', password: 'password')
f = User.create(username: 'Tobias Fünke', email: 'analrapist@email.com', password: 'password')
g = User.create(username: 'Buster Bluth', email: 'babybuster@email.com', password: 'password')
h = User.create(username: 'Gob Bluth', email: 'gob@email.com', password: 'password')

g.songs.create(title: '2AM Club - Every Evening')
a.songs.create(title: 'Josh Cocktail - Fire')
b.songs.create(title: 'KiD CuDi - CudderIsBack')
g.songs.create(title: 'Hoodie Allen - No Interruption')
d.songs.create(title: 'Daddys Groove - Hurricane')
a.songs.create(title: 'DMB - Crash')
f.songs.create(title: 'Mike Posner - Still Not Over You')
e.songs.create(title: 'Cris Cab - In My Dreams')
g.songs.create(title: 'Big Sean - Too Fake')
b.songs.create(title: 'Jack Johnson - Holes to Heaven')
h.songs.create(title: 'The Fray - Over My Head')
e.songs.create(title: 'The Deans List - Dear Professor')
b.songs.create(title: 'Mike Posner - Wonderwall [cover]')
g.songs.create(title: 'Lil Wayne - Let the Beat Build')
f.songs.create(title: 'Empire on the Sun - Walking on a Dream')
e.songs.create(title: 'Atmosphere - Godlovesugly')
a.songs.create(title: 'Luke Bryan - Crash My Party')
c.songs.create(title: 'Wolfgang Gartner - Space Junk')
d.songs.create(title: 'Nosaj Thing - Aquarium')
h.songs.create(title: 'Chiddy Bang - Young Blood (Remix)')
c.songs.create(title: 'Nappy Roots - AwwNaw')
e.songs.create(title: 'Years & Years - Rear')
d.songs.create(title: 'Big Sean - Marvin & Chardonnay (feat. Kanye West)')
f.songs.create(title: 'The White Panda - Midnight Life')
a.songs.create(title: 'The Neighbourhood - Sweater Weather')
f.songs.create(title: 'B.o.B - Airplanes')
e.songs.create(title: 'Lady Antebellum - Compass')
a.songs.create(title: 'The Deans List - Caveman')
h.songs.create(title: 'Shwayze - Dont be Shy')



a.out_follows.create(followee_id: 2)
a.out_follows.create(followee_id: 4)
c.out_follows.create(followee_id: 1)
c.out_follows.create(followee_id: 2)
b.out_follows.create(followee_id: 4)

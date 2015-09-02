exports = module.exports = MerkleDAGStore

function MerkleDAGStore () {
  var self = this

  if (!(self instanceof MerkleDAGStore)) {
    throw new Error('MerkleDAGStore must be called with new')
  }

  self.store = {}

  self.put = function (obj, hash) {
    self.store[hash] = obj
  }

  self.get = function (hash) {
    if (self.store[hash]) {
      return self.store[hash]
    }
    return null
  }
}

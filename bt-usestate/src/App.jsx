import { useState } from 'react'
import './App.css'
import dataGlasses from '../../dataGlasses.json'

function App() {
  const [selectedGlasses, setSelectedGlasses] = useState(dataGlasses[0])

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
      {/* Danh sách kính */}
      <div style={{ width: '40%' }}>
        <h2>Chọn kính</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
          {dataGlasses.map(glasses => (
            <img
              key={glasses.id}
              src={glasses.url.replace('./glassesImage', '/glassesImage')}
              alt={glasses.name}
              style={{ width: 80, cursor: 'pointer', border: selectedGlasses.id === glasses.id ? '2px solid blue' : 'none' }}
              onClick={() => setSelectedGlasses(glasses)}
            />
          ))}
        </div>
      </div>
      {/* Người mẫu với kính */}
      <div style={{ width: '55%', position: 'relative' }}>
        <img src="/glassesImage/model.jpg" alt="model" style={{ width: 200 }} />
        {selectedGlasses && (
          <img
            src={selectedGlasses.url.replace('./glassesImage', '/glassesImage')}
            alt={selectedGlasses.name}
            style={{
              position: 'absolute',
              top: 55, left: 45, width: 120, opacity: 0.85
            }}
          />
        )}
        <div style={{ marginTop: 20 }}>
          <h3>{selectedGlasses.name}</h3>
          <p>Giá: ${selectedGlasses.price}</p>
          <p>{selectedGlasses.desc}</p>
        </div>
      </div>
    </div>
  )
}

export default App

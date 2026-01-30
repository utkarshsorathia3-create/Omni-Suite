"use client";

import React, { useState } from 'react';
import Papa from 'papaparse';
import { Table, Upload, Search, FileSpreadsheet, AlertCircle } from 'lucide-react';

const CsvToTable = () => {
  const [data, setData] = useState<any[]>([]);
  const [headers, setHeaders] = useState<string[]>([]);
  const [search, setSearch] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: (results) => {
        if (results.data.length > 0) {
          setHeaders(Object.keys(results.data[0] as object));
          setData(results.data);
          setError(null);
        }
      },
      error: (err) => setError(err.message)
    });
  };

  const filteredData = data.filter(row => 
    Object.values(row).some(val => 
      String(val).toLowerCase().includes(search.toLowerCase())
    )
  );

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <div className="glass-panel" style={{ padding: '2rem', display: 'flex', gap: '2rem', alignItems: 'center' }}>
        <div style={{ position: 'relative', flex: 1 }}>
          <div style={{ 
            border: '2px dashed rgba(255,255,255,0.1)', 
            borderRadius: '16px', 
            padding: '1.5rem', 
            textAlign: 'center',
            background: 'rgba(255,255,255,0.02)',
            cursor: 'pointer'
          }}>
            <input 
              type="file" 
              accept=".csv" 
              onChange={handleFileUpload}
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0, cursor: 'pointer' }}
            />
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
              <Upload size={24} style={{ color: 'var(--accent-primary)' }} />
              <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                {data.length > 0 ? 'Change CSV File' : 'Drop your CSV file here or click to upload'}
              </span>
            </div>
          </div>
        </div>

        {data.length > 0 && (
          <div style={{ flex: 1, position: 'relative' }}>
            <Search size={18} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
            <input 
              type="text" 
              placeholder="Filter table data..." 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{ width: '100%', background: 'rgba(0,0,0,0.2)', border: '1px solid rgba(255,255,255,0.1)', padding: '0.75rem 1rem 0.75rem 2.8rem', borderRadius: '12px', color: 'white', outline: 'none' }}
            />
          </div>
        )}
      </div>

      {data.length > 0 ? (
        <div className="glass-panel" style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
          <div style={{ padding: '1.25rem 2rem', borderBottom: '1px solid rgba(255,255,255,0.05)', background: 'rgba(255,255,255,0.02)' }}>
            <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1rem' }}>
              <FileSpreadsheet size={18} color="var(--accent-primary)" /> 
              Dataset Overview ({filteredData.length} records)
            </h4>
          </div>
          <div style={{ overflowX: 'auto', maxHeight: '500px' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
              <thead style={{ position: 'sticky', top: 0, background: 'var(--bg-card)', zIndex: 1, backdropFilter: 'blur(10px)' }}>
                <tr>
                  {headers.map(h => (
                    <th key={h} style={{ padding: '1.25rem 2rem', textAlign: 'left', color: 'var(--text-secondary)', fontWeight: 600, borderBottom: '1px solid rgba(255,255,255,0.05)', whiteSpace: 'nowrap' }}>
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filteredData.map((row, i) => (
                  <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.03)', transition: 'background 0.2s' }}>
                    {headers.map(h => (
                      <td key={h} style={{ padding: '1rem 2rem', color: 'var(--text-primary)', whiteSpace: 'nowrap' }}>
                        {row[h]}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div className="glass-panel" style={{ padding: '5rem', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
           <Table size={48} style={{ opacity: 0.1 }} />
           <p style={{ color: 'var(--text-muted)' }}>Upload a CSV file to transform it into an interactive table.</p>
        </div>
      )}
    </div>
  );
};

export default CsvToTable;

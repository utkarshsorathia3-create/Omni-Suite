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
    <div className="tool-layout">
      <div className="glass-panel" style={{ padding: '1.5rem' }}>
        <div className="tool-grid" style={{ alignItems: 'stretch' }}>
          <div style={{ position: 'relative' }}>
            <div style={{ 
              border: '2px dashed rgba(255,255,255,0.1)', 
              borderRadius: '16px', 
              padding: '1.5rem', 
              textAlign: 'center',
              background: 'rgba(255,255,255,0.02)',
              cursor: 'pointer',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <input 
                type="file" 
                accept=".csv" 
                onChange={handleFileUpload}
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0, cursor: 'pointer' }}
              />
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem' }}>
                <Upload size={24} className="text-gradient" />
                <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                  {data.length > 0 ? 'Change CSV File' : 'Drop CSV or click to upload'}
                </span>
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            {data.length > 0 ? (
              <div style={{ position: 'relative' }}>
                <Search size={18} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                <input 
                  type="text" 
                  placeholder="Filter table data..." 
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  style={{ width: '100%', background: 'rgba(0,0,0,0.2)', border: '1px solid rgba(255,255,255,0.1)', padding: '0.75rem 1rem 0.75rem 2.8rem', borderRadius: '12px', color: 'white', outline: 'none' }}
                />
              </div>
            ) : (
              <div style={{ textAlign: 'left', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                <p>Upload your spreadsheet to search, filter, and analyze records directly in your browser.</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {data.length > 0 ? (
        <div className="glass-panel" style={{ padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
          <div style={{ padding: '1rem 1.5rem', borderBottom: '1px solid rgba(255,255,255,0.05)', background: 'rgba(255,255,255,0.02)' }}>
            <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.95rem' }}>
              <FileSpreadsheet size={18} className="text-gradient" /> 
              Dataset Overview ({filteredData.length} records)
            </h4>
          </div>
          <div style={{ overflowX: 'auto', maxHeight: '500px' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem' }}>
              <thead style={{ position: 'sticky', top: 0, background: '#111', zIndex: 10 }}>
                <tr>
                  {headers.map(h => (
                    <th key={h} style={{ padding: '1rem 1.5rem', textAlign: 'left', color: 'var(--text-muted)', fontWeight: 600, borderBottom: '1px solid rgba(255,255,255,0.05)', whiteSpace: 'nowrap', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filteredData.map((row, i) => (
                  <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.03)', transition: 'background 0.2s' }}>
                    {headers.map(h => (
                      <td key={h} style={{ padding: '0.85rem 1.5rem', color: 'var(--text-primary)', whiteSpace: 'nowrap' }}>
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
        <div className="glass-panel" style={{ padding: '4rem 2rem', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', opacity: 0.6 }}>
           <Table size={48} style={{ opacity: 0.2 }} />
           <p style={{ color: 'var(--text-muted)' }}>No data available. Please upload a CSV file.</p>
        </div>
      )}
    </div>
  );
};

export default CsvToTable;

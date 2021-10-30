import { useState } from 'react'

const AddLoker = () => {
    const [loker, setLoker] = useState('');
    const [perusahaan, setPerusahaan] = useState('');
    const [deskripsi, setDeskripsi] = useState('');
    const [kualifikasi, setKualifikasi] = useState('');
    const [jadwal, setJadwal] = useState('');

    return (
        <div>
            <form>
                <div>
                    <label className="label">Loker</label>
                    <input
                        class="input is-primary"
                        type="text"
                        placeholder="Lowongan Pekerjaan"
                        value={loker}
                        onChange={ (e) => setLoker(e.target.value) }
                    />
                </div>

                <div className="field">
                    <label className="label">Perusahaan</label>
                    <input
                        class="input is-primary"
                        type="text"
                        placeholder="Perusahaan"
                        value={perusahaan}
                        onChange={ (e) => setPerusahaan(e.target.value) }
                    />
                </div>

                <div className="field">
                    <label className="label">Deskripsi</label>
                    <textarea
                        class="textarea"
                        type="text"
                        placeholder="Deskripsi"
                        value={deskripsi}
                        onChange={ (e) => setDeskripsi(e.target.value) }
                    />
                </div>

                <div className="field">
                    <label className="label">Kualifikasi</label>
                    <textarea
                        class="textarea"
                        type="text"
                        placeholder="Kualifikasi" rows="10"
                        value={kualifikasi}
                        onChange={ (e) => setKualifikasi(e.target.value) }
                    />
                </div>

                <div className="field">
                    <label className="label">Jadwal</label>
                    <input
                        class="input"
                        type="date"
                        placeholder="Jadwal Tes"
                        value={jadwal}
                        onChange={ (e) => setJadwal(e.target.value) }
                    />
                </div>

                <div className="field">
                    <button className="button is-link is-outlined">Save</button>
                </div>
            </form>
        </div>
    )
}

export default AddLoker
